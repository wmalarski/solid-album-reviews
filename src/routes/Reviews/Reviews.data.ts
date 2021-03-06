import { graphqlSdk } from "@services/fetcher";
import { useNhostStatus } from "@services/nhost";
import { RouteDataFunc } from "solid-app-router";
import { createResource } from "solid-js";

const pageLimit = 10;

export type ReviewsLoaderArgs = {
  date?: string;
  query: string;
  lower: number;
  upper: number;
  page: number;
};

const loader = (args: ReviewsLoaderArgs & { isAuthorized: boolean }) => {
  const pattern = `%${args.query}%`;

  const fromDate = args.date ? new Date(args.date) : null;
  const toDate = fromDate ? new Date(fromDate) : null;
  toDate?.setDate(toDate.getDate() + 1);

  return !args.isAuthorized
    ? Promise.resolve(null)
    : graphqlSdk.SelectReviewsWithAlbumAndArtist({
        limit: pageLimit,
        offset: args.page * pageLimit,
        where: {
          _and: [
            { rate: { _gte: args.lower } },
            { rate: { _lte: args.upper } },
            { createdAt: { _gte: fromDate?.toISOString() } },
            { createdAt: { _lte: toDate?.toISOString() } },
            {
              _or: [
                { albumByAlbum: { title: { _ilike: pattern } } },
                {
                  albumByAlbum: {
                    artistByArtist: { name: { _ilike: pattern } },
                  },
                },
              ],
            },
          ],
        },
      });
};

export const reviewsDataLoader = ({
  location,
}: Parameters<RouteDataFunc>[0]) => {
  const status = useNhostStatus();

  const args = (): ReviewsLoaderArgs => {
    return {
      date: location.query.date,
      lower: +(location.query.lower || "0") || 0,
      page: +(location.query.page || "0") || 0,
      query: location.query.query || "",
      upper: +(location.query.upper || "10") || 10,
    };
  };

  const [reviews, { refetch }] = createResource(
    () => ({ ...args(), isAuthorized: status() === "auth" }),
    loader
  );

  const maxPage = () => {
    const count = reviews()?.data?.reviewAggregate.aggregate?.count || 0;
    return Math.ceil(count / pageLimit);
  };

  return { args, maxPage, refetch, reviews };
};

export type ReviewsDataLoaderReturn = ReturnType<typeof reviewsDataLoader>;

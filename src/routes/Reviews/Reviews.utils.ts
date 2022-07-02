import { graphqlSdk } from "@services/fetcher";
import { NhostResponse } from "@services/nhost";
import { SelectReviewsWithAlbumAndArtistQuery } from "@services/types";
import { Accessor, createResource, Resource } from "solid-js";

const pageLimit = 10;

export type ReviewsLoaderArgs = {
  query: string;
  lower: number;
  upper: number;
};

type LoaderArgs = {
  page: number;
  args: ReviewsLoaderArgs;
};

const loader = ({ page, args }: LoaderArgs) => {
  const pattern = `%${args.query}%`;
  return graphqlSdk.SelectReviewsWithAlbumAndArtist({
    limit: pageLimit,
    offset: page * pageLimit,
    where: {
      _and: [
        { rate: { _gte: args.lower } },
        { rate: { _lte: args.upper } },
        {
          _or: [
            { albumByAlbum: { title: { _ilike: pattern } } },
            { albumByAlbum: { artistByArtist: { name: { _ilike: pattern } } } },
          ],
        },
      ],
    },
  });
};

type CreateReviewsResourceOptions = {
  page: Accessor<number>;
  args: Accessor<ReviewsLoaderArgs>;
};

type CreateReviewsResourceReturn = {
  maxPage: () => number;
  refetch: () => void;
  reviews: Resource<
    NhostResponse<SelectReviewsWithAlbumAndArtistQuery> | undefined
  >;
};

export const createReviewsResource = ({
  page,
  args,
}: CreateReviewsResourceOptions): CreateReviewsResourceReturn => {
  const [reviews, { refetch }] = createResource(
    () => ({
      args: args(),
      page: page(),
    }),
    loader
  );

  const maxPage = () => {
    const count = reviews()?.data?.reviewAggregate.aggregate?.count || 0;
    return Math.ceil(count / pageLimit);
  };

  return { maxPage, refetch, reviews };
};

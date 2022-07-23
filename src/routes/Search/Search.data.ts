import { graphqlSdk } from "@services/fetcher";
import { RouteDataFunc } from "solid-app-router";
import { createResource } from "solid-js";

const pageLimit = 10;

type LoaderArgs = {
  page: number;
  query: string;
};

const loader = ({ page, query }: LoaderArgs) => {
  const pattern = `%${query}%`;
  return graphqlSdk.SelectAlbumsWithArtist({
    limit: pageLimit,
    offset: page * pageLimit,
    where: {
      _or: [
        { title: { _ilike: pattern } },
        { artistByArtist: { name: { _ilike: pattern } } },
      ],
    },
  });
};

export const searchDataLoader = ({
  location,
}: Parameters<RouteDataFunc>[0]) => {
  const [albums, { refetch }] = createResource(
    () => ({
      page: +(location.query.page || 0),
      query: location.query.query || "",
    }),
    loader
  );

  const maxPage = () => {
    const count = albums()?.data?.albumAggregate.aggregate?.count || 0;
    return Math.ceil(count / pageLimit);
  };

  return { albums, maxPage, refetch };
};

export type SearchDataLoaderResult = ReturnType<typeof searchDataLoader>;

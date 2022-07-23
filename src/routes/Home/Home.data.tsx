import { graphqlSdk } from "@services/fetcher";
import { createResource } from "solid-js";

const loader = () => {
  return graphqlSdk.RandomAlbums({
    limit: 20,
  });
};

export const homeDataLoader = () => {
  const [albums, { refetch }] = createResource(loader);

  return { albums, refetch };
};

export type HomeDataLoaderResult = ReturnType<typeof homeDataLoader>;

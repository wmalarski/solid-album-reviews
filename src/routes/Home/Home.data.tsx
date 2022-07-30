import { graphqlSdk } from "@services/fetcher";
import { useNhostStatus } from "@services/nhost";
import { createResource } from "solid-js";

type HomeLoaderArgs = {
  isAuthorized: boolean;
};

const loader = ({ isAuthorized }: HomeLoaderArgs) => {
  return !isAuthorized
    ? Promise.resolve(null)
    : graphqlSdk.RandomAlbums({
        limit: 20,
      });
};

export const homeDataLoader = () => {
  const status = useNhostStatus();

  const [albums, { refetch }] = createResource(
    () => ({ isAuthorized: status() === "auth" }),
    loader
  );

  return { albums, refetch };
};

export type HomeDataLoaderResult = ReturnType<typeof homeDataLoader>;

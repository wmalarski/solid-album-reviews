import { graphqlSdk } from "@services/fetcher";
import { RouteDataFunc } from "solid-app-router";
import { createResource } from "solid-js";

type AlbumLoaderArgs = {
  albumId: number;
};

const albumLoader = ({ albumId }: AlbumLoaderArgs) => {
  return graphqlSdk.SelectAlbum({ id: albumId });
};

export const albumDataLoader = ({ params }: Parameters<RouteDataFunc>[0]) => {
  const albumId = () => {
    return +params.albumId;
  };

  const [album, { refetch }] = createResource(
    () => ({ albumId: albumId() }),
    albumLoader
  );

  return { album, albumId, refetch };
};

export type AlbumDataLoaderResult = ReturnType<typeof albumDataLoader>;

import type { AlbumDataLoaderResult } from "@routes/Album/Album.data";
import { graphqlSdk } from "@services/fetcher";
import { RouteDataFunc } from "solid-app-router";
import { createResource } from "solid-js";

type AlbumsLoaderArgs = {
  page: number;
  albumId: number;
};

const pageLimit = 20;

const albumsLoader = ({ page, albumId }: AlbumsLoaderArgs) => {
  return graphqlSdk.SelectAlbumsWithReviews({
    limit: pageLimit,
    offset: page * pageLimit,
    where: {
      artistByArtist: {
        albums: {
          id: {
            _eq: albumId,
          },
        },
      },
    },
  });
};

export const albumReviewsDataLoader = ({
  location,
  data,
}: Parameters<RouteDataFunc>[0]) => {
  const {
    album,
    albumId,
    refetch: refetchAlbum,
  } = data as AlbumDataLoaderResult;

  const page = () => {
    return +(location.query.page || "0");
  };

  const [albums, { refetch: refetchAlbums }] = createResource(
    () => ({ albumId: albumId(), page: page() }),
    albumsLoader
  );

  const maxPage = () => {
    const count = albums()?.data?.albumAggregate.aggregate?.count || 0;
    return Math.ceil(count / pageLimit);
  };

  return { album, albumId, albums, maxPage, page, refetchAlbum, refetchAlbums };
};

export type AlbumReviewDataLoaderResult = ReturnType<
  typeof albumReviewsDataLoader
>;

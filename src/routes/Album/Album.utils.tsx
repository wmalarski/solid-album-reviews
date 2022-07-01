import { graphqlSdk } from "@services/fetcher";
import { NhostResponse } from "@services/nhost";
import {
  SelectAlbumQuery,
  SelectAlbumsWithReviewsQuery,
} from "@services/types";
import {
  Component,
  createContext,
  createResource,
  JSX,
  useContext,
} from "solid-js";

type AlbumResourceContextValue = {
  album: () => NhostResponse<SelectAlbumQuery> | undefined;
  albums: () => NhostResponse<SelectAlbumsWithReviewsQuery> | undefined;
  maxPage: () => number;
  refetchAlbum: () => void;
  refetchAlbums: () => void;
};

const AlbumResourceContext = createContext<AlbumResourceContextValue>({
  album: () => void 0,
  albums: () => void 0,
  maxPage: () => 0,
  refetchAlbum: () => void 0,
  refetchAlbums: () => void 0,
});

type AlbumLoaderArgs = {
  albumId: number;
};

const albumLoader = ({ albumId }: AlbumLoaderArgs) => {
  return graphqlSdk.SelectAlbum({ id: albumId });
};

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

type Props = {
  albumId: number;
  children: JSX.Element;
  page: number;
};

export const AlbumResourceProvider: Component<Props> = (props) => {
  const [album, { refetch: refetchAlbum }] = createResource(
    () => ({ albumId: props.albumId }),
    albumLoader
  );
  const [albums, { refetch: refetchAlbums }] = createResource(
    () => ({ albumId: props.albumId, page: props.page }),
    albumsLoader
  );
  const maxPage = () => {
    const count = albums()?.data?.albumAggregate.aggregate?.count || 0;
    return Math.ceil(count / pageLimit);
  };

  return (
    <AlbumResourceContext.Provider
      value={{ album, albums, maxPage, refetchAlbum, refetchAlbums }}
    >
      {props.children}
    </AlbumResourceContext.Provider>
  );
};

export const useAlbumResource = (): AlbumResourceContextValue => {
  return useContext(AlbumResourceContext);
};

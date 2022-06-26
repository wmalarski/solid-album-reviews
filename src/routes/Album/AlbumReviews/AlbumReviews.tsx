import { Pagination } from "@components/Pagination/Pagination";
import { graphqlSdk } from "@services/fetcher";
import { Component, createResource, createSignal, For, Show } from "solid-js";
import * as classes from "./AlbumReviews.css";
import { AlbumReviewsItem } from "./AlbumReviewsItem/AlbumReviewsItem";

type LoaderArgs = {
  page: number;
  albumId: number;
};

const pageLimit = 20;

const loader = ({ page, albumId }: LoaderArgs) => {
  return Promise.all([
    graphqlSdk.SelectAlbum({ id: albumId }),
    graphqlSdk.SelectAlbumsWithReviews({
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
    }),
  ]);
};

type Props = {
  albumId: number;
};

export const AlbumReviews: Component<Props> = (props) => {
  const [page, setPage] = createSignal(0);

  const [resource, { refetch }] = createResource(
    () => ({ albumId: props.albumId, page: page() }),
    loader
  );

  const selectAlbums = () => {
    return resource()?.[1];
  };

  const selectArtist = () => {
    return resource()?.[0].data?.albumByPk?.artistByArtist;
  };

  const maxPage = () => {
    const count = selectAlbums()?.data?.albumAggregate.aggregate?.count || 0;
    return Math.ceil(count / pageLimit);
  };

  const handleAlbumChange = () => {
    refetch();
  };

  return (
    <div class={classes.container}>
      <Show when={selectArtist()}>
        {(artist) => (
          <For each={selectAlbums()?.data?.album}>
            {(album) => (
              <AlbumReviewsItem
                album={{ ...album, artistByArtist: artist }}
                onAlbumChange={handleAlbumChange}
              />
            )}
          </For>
        )}
      </Show>
      <Pagination current={page()} maxPage={maxPage()} onChange={setPage} />
    </div>
  );
};

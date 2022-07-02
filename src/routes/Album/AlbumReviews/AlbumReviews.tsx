import { Pagination } from "@components/Pagination/Pagination";
import { Component, For, Show } from "solid-js";
import { useAlbumResource } from "../Album.utils";
import * as classes from "./AlbumReviews.css";
import { AlbumReviewsItem } from "./AlbumReviewsItem/AlbumReviewsItem";

type Props = {
  albumId: number;
  page: number;
  onPageChange: (page: number) => void;
};

export const AlbumReviews: Component<Props> = (props) => {
  const { album, albums, maxPage } = useAlbumResource();

  return (
    <div class={classes.container}>
      <Show when={album()?.data?.albumByPk?.artistByArtist}>
        {(artist) => (
          <For each={albums()?.data?.album}>
            {(album) => (
              <AlbumReviewsItem
                album={{ ...album, artistByArtist: artist }}
                isCurrent={album.id === props.albumId}
              />
            )}
          </For>
        )}
      </Show>
      <Pagination
        current={props.page}
        maxPage={maxPage()}
        onChange={(page) => props.onPageChange(page)}
      />
    </div>
  );
};

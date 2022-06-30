import { Component, For, Show } from "solid-js";
import { useHomeResource } from "../Home.utils";
import { AlbumItem } from "./AlbumItem/AlbumItem";
import * as classes from "./AlbumsGrid.css";
import { requireAlbumFragment } from "./AlbumsGrid.utils";

export const AlbumsGrid: Component = () => {
  const { albums } = useHomeResource();

  return (
    <div class={classes.container}>
      <For each={albums()?.data?.randomAlbums}>
        {(album) => (
          <Show when={requireAlbumFragment(album)}>
            {(album) => <AlbumItem album={album} />}
          </Show>
        )}
      </For>
    </div>
  );
};

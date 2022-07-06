import { Button } from "@components/Button/Button";
import { useI18n } from "@solid-primitives/i18n";
import { Component, For, Show } from "solid-js";
import { useHomeResource } from "../Home.utils";
import { AlbumItem } from "./AlbumItem/AlbumItem";
import * as classes from "./AlbumsGrid.css";
import { requireAlbumFragment } from "./AlbumsGrid.utils";

export const AlbumsGrid: Component = () => {
  const [t] = useI18n();

  const { albums, refetch } = useHomeResource();

  const handleRefetchClick = () => {
    refetch();
  };

  return (
    <div class={classes.container}>
      <div class={classes.grid}>
        <For each={albums()?.data?.randomAlbums}>
          {(album) => (
            <Show when={requireAlbumFragment(album)}>
              {(album) => <AlbumItem album={album} />}
            </Show>
          )}
        </For>
      </div>
      <Button onClick={handleRefetchClick}>{t("home.refetch")}</Button>
    </div>
  );
};

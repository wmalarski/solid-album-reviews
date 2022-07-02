import { AlbumActions } from "@modules/AlbumActions/AlbumActions";
import { AlbumCoversCarousel } from "@modules/AlbumCoversCarousel/AlbumCoversCarousel";
import { formatAlbum } from "@utils/formatters";
import { paths } from "@utils/paths";
import { useNavigate } from "solid-app-router";
import { Component, Show } from "solid-js";
import { useAlbumResource } from "../Album.utils";
import * as classes from "./AlbumDetails.css";

export const AlbumDetails: Component = () => {
  const navigate = useNavigate();

  const { album, refetchAlbum } = useAlbumResource();

  const handleAlbumDelete = () => {
    navigate(paths.root);
  };

  const handleAlbumUpdate = () => {
    refetchAlbum();
  };

  return (
    <Show when={album()?.data?.albumByPk}>
      {(album) => (
        <div>
          <AlbumCoversCarousel
            isHovering={true}
            label={formatAlbum(album)}
            sid={album.sid}
            kind="large"
          />
          <AlbumActions
            album={album}
            onAlbumDelete={handleAlbumDelete}
            onAlbumUpdate={handleAlbumUpdate}
          />
          <pre class={classes.container}>{JSON.stringify(album, null, 2)}</pre>
        </div>
      )}
    </Show>
  );
};

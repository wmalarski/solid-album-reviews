import { AlbumActions } from "@modules/AlbumActions/AlbumActions";
import { AlbumCover } from "@modules/AlbumCover/AlbumCover";
import { formatAlbum } from "@utils/formatters";
import { paths } from "@utils/paths";
import { useNavigate, useRouteData } from "solid-app-router";
import { Component, Show } from "solid-js";
import type { AlbumDataLoaderResult } from "../Album.data";
import * as classes from "./AlbumDetails.css";

export const AlbumDetails: Component = () => {
  const navigate = useNavigate();

  const { album, refetch } = useRouteData<AlbumDataLoaderResult>();

  const handleAlbumDelete = () => {
    navigate(paths.root);
  };

  const handleAlbumUpdate = () => {
    refetch();
  };

  return (
    <Show when={album()?.data?.albumByPk}>
      {(album) => (
        <div class={classes.container}>
          <h1>{formatAlbum(album)}</h1>
          <AlbumCover label={formatAlbum(album)} sid={album.sid} kind="large" />
          <AlbumActions
            album={album}
            onAlbumDelete={handleAlbumDelete}
            onAlbumUpdate={handleAlbumUpdate}
          />
        </div>
      )}
    </Show>
  );
};

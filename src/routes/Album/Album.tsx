import { paths } from "@utils/paths";
import { Navigate, Outlet, useRouteData } from "solid-app-router";
import { Component, Show } from "solid-js";
import * as classes from "./Album.css";
import type { AlbumDataLoaderResult } from "./Album.data";
import { AlbumDetails } from "./AlbumDetails/AlbumDetails";

const Album: Component = () => {
  const { albumId } = useRouteData<AlbumDataLoaderResult>();

  return (
    <Show when={albumId()} fallback={<Navigate href={paths.notFound} />}>
      <div class={classes.container}>
        <AlbumDetails />
        <Outlet />
      </div>
    </Show>
  );
};

export default Album;

import { paths } from "@utils/paths";
import { Navigate, Outlet, useRouteData } from "solid-app-router";
import { Component, Show } from "solid-js";
import * as classes from "./Album.css";
import type { AlbumDataLoaderResult } from "./Album.data";
import { AlbumDetails } from "./AlbumDetails/AlbumDetails";

const Album: Component = () => {
  const { album } = useRouteData<AlbumDataLoaderResult>();

  const isValid = () => {
    const result = album();

    if (!result) {
      return true;
    }

    return !!result.data;
  };

  return (
    <Show when={isValid()} fallback={<Navigate href={paths.notFound} />}>
      <div class={classes.container}>
        <AlbumDetails />
        <Outlet />
      </div>
    </Show>
  );
};

export default Album;

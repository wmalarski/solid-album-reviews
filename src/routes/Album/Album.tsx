import { paths } from "@utils/paths";
import { Navigate, useParams } from "solid-app-router";
import { Component, createSignal, Show } from "solid-js";
import * as classes from "./Album.css";
import { AlbumResourceProvider } from "./Album.utils";
import { AlbumDetails } from "./AlbumDetails/AlbumDetails";
import { AlbumReviews } from "./AlbumReviews/AlbumReviews";

type AlbumParams = {
  albumId: string;
};

const Album: Component = () => {
  const params = useParams<AlbumParams>();

  const albumId = /\d+/.test(params.albumId) ? Number(params.albumId) : null;

  const [page, setPage] = createSignal(0);

  return (
    <Show when={albumId} fallback={<Navigate href={paths.notFound} />}>
      {(albumId) => (
        <AlbumResourceProvider albumId={albumId} page={page()}>
          <div class={classes.container}>
            <AlbumDetails />
            <AlbumReviews
              albumId={albumId}
              page={page()}
              onPageChange={setPage}
            />
          </div>
        </AlbumResourceProvider>
      )}
    </Show>
  );
};

export default Album;

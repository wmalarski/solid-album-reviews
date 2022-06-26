import { paths } from "@utils/paths";
import { Navigate, useParams } from "solid-app-router";
import { Component, Show } from "solid-js";
import { AlbumDetails } from "./AlbumDetails/AlbumDetails";
import { AlbumReviews } from "./AlbumReviews/AlbumReviews";

type AlbumParams = {
  albumId: string;
};

const Album: Component = () => {
  const params = useParams<AlbumParams>();

  const albumId = /\d+/.test(params.albumId) ? Number(params.albumId) : null;

  return (
    <Show when={albumId} fallback={<Navigate href={paths.notFound} />}>
      {(albumId) => (
        <>
          <AlbumDetails albumId={albumId} />
          <AlbumReviews albumId={albumId} />
        </>
      )}
    </Show>
  );
};

export default Album;

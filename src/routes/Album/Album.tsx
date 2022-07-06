import { paths } from "@utils/paths";
import { Navigate, useParams, useSearchParams } from "solid-app-router";
import { Component, Show } from "solid-js";
import * as classes from "./Album.css";
import { AlbumResourceProvider } from "./Album.utils";
import { AlbumDetails } from "./AlbumDetails/AlbumDetails";
import { AlbumReviews } from "./AlbumReviews/AlbumReviews";

type AlbumParams = {
  albumId: string;
};

const Album: Component = () => {
  const params = useParams<AlbumParams>();
  const [searchParams, setSearchParams] = useSearchParams();

  const albumId = /\d+/.test(params.albumId) ? Number(params.albumId) : null;

  const handlePageChange = (update: number) => {
    setSearchParams({ page: update });
  };

  const page = () => {
    return Number(searchParams.page || "0");
  };

  return (
    <Show when={albumId} fallback={<Navigate href={paths.notFound} />}>
      {(albumId) => (
        <AlbumResourceProvider albumId={albumId} page={page()}>
          <div class={classes.container}>
            <AlbumDetails />
            <AlbumReviews
              albumId={albumId}
              page={page()}
              onPageChange={handlePageChange}
            />
          </div>
        </AlbumResourceProvider>
      )}
    </Show>
  );
};

export default Album;

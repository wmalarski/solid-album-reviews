import { graphqlSdk } from "@services/fetcher";
import { paths } from "@utils/paths";
import { Navigate, useParams } from "solid-app-router";
import { Component, createResource, Show } from "solid-js";
import { AlbumDetails } from "./AlbumDetails/AlbumDetails";
import { ReviewDialog } from "./ReviewDialog/ReviewDialog";

type AlbumParams = {
  albumId: string;
};

const loader = (id: number | null) => {
  if (!id) {
    return undefined;
  }
  return graphqlSdk.SelectAlbum({ id });
};

const Album: Component = () => {
  const params = useParams<AlbumParams>();

  const albumId = /\d+/.test(params.albumId) ? Number(params.albumId) : null;

  const [selectAlbum] = createResource(() => albumId, loader);

  return (
    <Show when={albumId} fallback={<Navigate href={paths.notFound} />}>
      {(albumId) => (
        <>
          <Show when={selectAlbum()?.data?.albumByPk}>
            {(album) => <AlbumDetails album={album} />}
          </Show>
          <ReviewDialog albumId={albumId} />
        </>
      )}
    </Show>
  );
};

export default Album;

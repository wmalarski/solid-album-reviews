import { AlbumActions } from "@modules/AlbumActions/AlbumActions";
import { AlbumCoversCarousel } from "@modules/AlbumCoversCarousel/AlbumCoversCarousel";
import { graphqlSdk } from "@services/fetcher";
import { formatAlbum } from "@utils/formatters";
import { Component, createResource, Show } from "solid-js";
import * as classes from "./AlbumDetails.css";

const loader = (id: number) => {
  return graphqlSdk.SelectAlbum({ id });
};

type Props = {
  albumId: number;
};

export const AlbumDetails: Component<Props> = (props) => {
  const [selectAlbum] = createResource(() => props.albumId, loader);

  return (
    <Show when={selectAlbum()?.data?.albumByPk}>
      {(album) => (
        <div>
          <AlbumCoversCarousel
            isHovering={true}
            label={formatAlbum(album)}
            sid={album.sid}
            kind="large"
          />
          <AlbumActions album={album} />
          <pre class={classes.container}>{JSON.stringify(album, null, 2)}</pre>
        </div>
      )}
    </Show>
  );
};

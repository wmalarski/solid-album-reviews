import { AlbumCoversCarousel } from "@modules/AlbumCoversCarousel/AlbumCoversCarousel";
import { GoogleRedirectButton } from "@modules/GoogleRedirectButton/GoogleRedirectButton";
import { YtRedirectButton } from "@modules/YtRedirectButton/YtRedirectButton";
import { AlbumWithArtistFragment } from "@services/types";
import { formatAlbum } from "@utils/formatters";
import { Component } from "solid-js";
import * as classes from "./AlbumDetails.css";

type Props = {
  album: AlbumWithArtistFragment;
};

export const AlbumDetails: Component<Props> = (props) => {
  return (
    <div>
      <AlbumCoversCarousel
        isHovering={true}
        label={formatAlbum(props.album)}
        sid={props.album.sid}
        kind="large"
      />
      <YtRedirectButton album={props.album} />
      <GoogleRedirectButton album={props.album} />
      <pre class={classes.container}>
        {JSON.stringify(props.album, null, 2)}
      </pre>
    </div>
  );
};

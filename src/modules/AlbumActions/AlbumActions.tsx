import { GoogleRedirectButton } from "@modules/GoogleRedirectButton/GoogleRedirectButton";
import { YtRedirectButton } from "@modules/YtRedirectButton/YtRedirectButton";
import { AlbumWithArtistFragment } from "@services/types";
import { Component } from "solid-js";
import * as classes from "./AlbumActions.css";

type Props = {
  album: AlbumWithArtistFragment;
};

export const AlbumActions: Component<Props> = (props) => {
  return (
    <div class={classes.container}>
      <YtRedirectButton album={props.album} />
      <GoogleRedirectButton album={props.album} />
    </div>
  );
};

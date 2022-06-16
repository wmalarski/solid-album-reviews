import { frontCoverUrl } from "@services/coverArt";
import { Component, JSX, Show } from "solid-js";
import * as classes from "./AlbumCover.css";

type Props = {
  label: string;
  mBid?: string | null;
};

export const AlbumCover: Component<Props> = (props: Props): JSX.Element => {
  return (
    <Show when={props.mBid}>
      {(mBid) => (
        <img
          class={classes.image}
          src={frontCoverUrl({ mBid })}
          alt={props.label}
          aria-label={props.label}
        />
      )}
    </Show>
  );
};

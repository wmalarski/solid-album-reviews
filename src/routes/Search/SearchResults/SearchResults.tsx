import { AlbumWithArtistFragment } from "@services/types";
import { Component, For } from "solid-js";
import { ResultItem } from "./ResultItem/ResultItem";
import * as classes from "./SearchResults.css";

type Props = {
  albums: AlbumWithArtistFragment[];
};

export const SearchResults: Component<Props> = (props) => {
  return (
    <div class={classes.container}>
      <For each={props.albums}>{(album) => <ResultItem album={album} />}</For>
    </div>
  );
};

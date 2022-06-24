import { AlbumWithArtistFragment } from "@services/types";
import { Component } from "solid-js";
import * as classes from "./SearchResults.css";

type Props = {
  albums: AlbumWithArtistFragment[];
};

export const SearchResults: Component<Props> = (props) => {
  return (
    <pre class={classes.container}>{JSON.stringify(props.albums, null, 2)}</pre>
  );
};

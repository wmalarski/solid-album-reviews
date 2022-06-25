import { AlbumCoversCarousel } from "@modules/AlbumCoversCarousel/AlbumCoversCarousel";
import { AlbumWithReviewsFragment } from "@services/types";
import { formatAlbum } from "@utils/formatters";
import { paths } from "@utils/paths";
import { Link } from "solid-app-router";
import { Component } from "solid-js";
import * as classes from "./AlbumReviewsItem.css";

type Props = {
  album: AlbumWithReviewsFragment;
};

export const AlbumReviewsItem: Component<Props> = (props) => {
  return (
    <div class={classes.container}>
      <AlbumCoversCarousel
        isHovering={false}
        label={formatAlbum(props.album)}
        sid={props.album.sid}
        kind="small"
      />
      <div class={classes.right}>
        <Link href={paths.album(props.album.id)}>
          {formatAlbum(props.album)}
        </Link>
        <pre>{JSON.stringify(props.album, null, 2)}</pre>
      </div>
    </div>
  );
};

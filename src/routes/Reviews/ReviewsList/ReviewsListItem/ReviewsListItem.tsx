import { AlbumCoversCarousel } from "@modules/AlbumCoversCarousel/AlbumCoversCarousel";
import { ReviewWithAlbumAndArtistFragment } from "@services/types";
import { formatAlbum } from "@utils/formatters";
import { paths } from "@utils/paths";
import { Link } from "solid-app-router";
import { Component } from "solid-js";
import * as classes from "./ReviewsListItem.css";

type Props = {
  review: ReviewWithAlbumAndArtistFragment;
};

export const ReviewsListItem: Component<Props> = (props) => {
  return (
    <div class={classes.container}>
      <AlbumCoversCarousel
        isHovering={false}
        label={formatAlbum(props.review.albumByAlbum)}
        sid={props.review.albumByAlbum.sid}
        kind="small"
      />
      <div class={classes.right}>
        <Link href={paths.album(props.review.albumByAlbum.id)}>
          {formatAlbum(props.review.albumByAlbum)}
        </Link>
        <pre>{JSON.stringify(props.review, null, 2)}</pre>
      </div>
    </div>
  );
};
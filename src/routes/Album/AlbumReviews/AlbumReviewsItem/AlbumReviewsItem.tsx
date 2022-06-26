import { AlbumActions } from "@modules/AlbumActions/AlbumActions";
import { AlbumCoversCarousel } from "@modules/AlbumCoversCarousel/AlbumCoversCarousel";
import {
  AlbumWithArtistFragment,
  AlbumWithReviewsFragment,
} from "@services/types";
import { formatAlbum } from "@utils/formatters";
import { paths } from "@utils/paths";
import { Link } from "solid-app-router";
import { Component, For } from "solid-js";
import * as classes from "./AlbumReviewsItem.css";
import { ReviewItem } from "./ReviewItem/ReviewItem";

type Props = {
  album: AlbumWithReviewsFragment & AlbumWithArtistFragment;
  onAlbumChange: () => void;
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
        <AlbumActions album={props.album} />
        <For each={props.album.reviews}>
          {(review) => (
            <ReviewItem
              review={review}
              onReviewChange={() => props.onAlbumChange()}
            />
          )}
        </For>
      </div>
    </div>
  );
};

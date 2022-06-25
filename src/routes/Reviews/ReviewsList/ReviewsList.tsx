import { ReviewWithAlbumAndArtistFragment } from "@services/types";
import { Component, For } from "solid-js";
import * as classes from "./ReviewsList.css";
import { ReviewsListItem } from "./ReviewsListItem/ReviewsListItem";

type Props = {
  reviews: ReviewWithAlbumAndArtistFragment[];
};

export const ReviewsList: Component<Props> = (props) => {
  return (
    <div class={classes.container}>
      <For each={props.reviews}>
        {(review) => <ReviewsListItem review={review} />}
      </For>
    </div>
  );
};

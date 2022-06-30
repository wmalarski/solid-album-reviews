import { GoogleRedirectButton } from "@modules/GoogleRedirectButton/GoogleRedirectButton";
import { DeleteReviewDialog } from "@modules/ReviewActions/DeleteReviewDialog/DeleteReviewDialog";
import { UpdateReviewDialog } from "@modules/ReviewActions/UpdateReviewDialog/UpdateReviewDialog";
import { YtRedirectButton } from "@modules/YtRedirectButton/YtRedirectButton";
import {
  ReviewFragment,
  ReviewWithAlbumAndArtistFragment,
} from "@services/types";
import { Component, Show } from "solid-js";
import * as classes from "./ReviewActions.css";

type Props = {
  review: Partial<ReviewWithAlbumAndArtistFragment> & ReviewFragment;
  onReviewDelete: () => void;
  onReviewUpdate: () => void;
};

export const ReviewActions: Component<Props> = (props) => {
  return (
    <div class={classes.container}>
      <Show when={props.review.albumByAlbum}>
        {(album) => (
          <>
            <YtRedirectButton album={album} />
            <GoogleRedirectButton album={album} />
          </>
        )}
      </Show>
      <UpdateReviewDialog
        review={props.review}
        onSuccess={() => props.onReviewUpdate()}
      />
      <DeleteReviewDialog
        reviewId={props.review.id}
        onSuccess={() => props.onReviewDelete()}
      />
    </div>
  );
};

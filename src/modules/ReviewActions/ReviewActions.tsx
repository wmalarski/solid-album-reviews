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
  onReviewChange: () => void;
};

export const ReviewActions: Component<Props> = (props) => {
  const handleReviewChange = () => {
    props.onReviewChange();
  };

  return (
    <div class={classes.container}>
      <DeleteReviewDialog
        reviewId={props.review.id}
        onSuccess={handleReviewChange}
      />
      <UpdateReviewDialog
        review={props.review}
        onSuccess={handleReviewChange}
      />
      <Show when={props.review.albumByAlbum}>
        {(album) => (
          <>
            <YtRedirectButton album={album} />
            <GoogleRedirectButton album={album} />
          </>
        )}
      </Show>
    </div>
  );
};

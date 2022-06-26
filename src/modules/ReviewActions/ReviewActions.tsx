import { DeleteReviewDialog } from "@modules/ReviewActions/DeleteReviewDialog/DeleteReviewDialog";
import { UpdateReviewDialog } from "@modules/ReviewActions/UpdateReviewDialog/UpdateReviewDialog";
import { ReviewFragment } from "@services/types";
import { Component } from "solid-js";
import * as classes from "./ReviewActions.css";

type Props = {
  review: ReviewFragment;
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
    </div>
  );
};

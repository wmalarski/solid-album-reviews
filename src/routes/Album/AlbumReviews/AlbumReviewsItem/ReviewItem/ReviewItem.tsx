import { DeleteReviewDialog } from "@modules/DeleteReviewDialog/DeleteReviewDialog";
import { UpdateReviewDialog } from "@modules/UpdateReviewDialog/UpdateReviewDialog";
import { ReviewFragment } from "@services/types";
import { Component } from "solid-js";
import * as classes from "./ReviewItem.css";

type Props = {
  review: ReviewFragment;
  onReviewChange: () => void;
};

export const ReviewItem: Component<Props> = (props) => {
  const handleReviewChange = () => {
    props.onReviewChange();
  };

  return (
    <div class={classes.container}>
      <pre>{JSON.stringify(props.review, null, 2)}</pre>
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

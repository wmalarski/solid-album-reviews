import { DeleteReviewDialog } from "@modules/DeleteReviewDialog/DeleteReviewDialog";
import { ReviewFragment } from "@services/types";
import { Component } from "solid-js";
import * as classes from "./ReviewItem.css";

type Props = {
  review: ReviewFragment;
};

export const ReviewItem: Component<Props> = (props) => {
  return (
    <div class={classes.container}>
      <pre>{JSON.stringify(props.review, null, 2)}</pre>
      <DeleteReviewDialog reviewId={props.review.id} />
    </div>
  );
};

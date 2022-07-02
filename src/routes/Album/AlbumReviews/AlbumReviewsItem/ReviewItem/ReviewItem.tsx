import { ReviewActions } from "@modules/ReviewActions/ReviewActions";
import { ReviewFragment } from "@services/types";
import { Component } from "solid-js";
import * as classes from "./ReviewItem.css";

type Props = {
  review: ReviewFragment;
  onReviewChange: () => void;
};

export const ReviewItem: Component<Props> = (props) => {
  return (
    <div class={classes.container}>
      <pre>{JSON.stringify(props.review, null, 2)}</pre>
      <ReviewActions
        onReviewDelete={() => props.onReviewChange()}
        onReviewUpdate={() => props.onReviewChange()}
        review={props.review}
      />
    </div>
  );
};

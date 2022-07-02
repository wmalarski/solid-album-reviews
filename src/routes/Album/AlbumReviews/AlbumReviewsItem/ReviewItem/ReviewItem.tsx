import { ReviewActions } from "@modules/ReviewActions/ReviewActions";
import { ReviewFragment } from "@services/types";
import { useI18n } from "@solid-primitives/i18n";
import { formatDate } from "@utils/formatters";
import { Component } from "solid-js";
import * as classes from "./ReviewItem.css";

type Props = {
  review: ReviewFragment;
  onReviewChange: () => void;
};

export const ReviewItem: Component<Props> = (props) => {
  const [t] = useI18n();

  return (
    <div class={classes.container}>
      <div class={classes.data}>
        <span>{t("ReviewItem.rate")}</span>
        <span>{props.review.rate}</span>
        <span>{t("ReviewItem.text")}</span>
        <span>{props.review.text}</span>
        <span>{t("ReviewItem.date")}</span>
        <span>{formatDate(props.review.createdAt)}</span>
      </div>
      <ReviewActions
        onReviewDelete={() => props.onReviewChange()}
        onReviewUpdate={() => props.onReviewChange()}
        review={props.review}
      />
    </div>
  );
};

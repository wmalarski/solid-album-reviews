import { useI18n } from "@solid-primitives/i18n";
import { useRouteData } from "solid-app-router";
import { Component } from "solid-js";
import * as classes from "./ReviewsGrid.css";
import type { ReviewsGridDataLoaderReturn } from "./ReviewsGrid.data";

type Props = {
  data?: string;
};

const ReviewsGrid: Component<Props> = () => {
  const [t] = useI18n();

  const { reviews } = useRouteData<ReviewsGridDataLoaderReturn>();

  return (
    <div class={classes.container}>
      {t("ReviewsGrid.text")}
      <pre>{JSON.stringify(reviews(), null, 2)}</pre>
    </div>
  );
};

export default ReviewsGrid;

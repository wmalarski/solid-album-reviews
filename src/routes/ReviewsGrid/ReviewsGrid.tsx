import { useI18n } from "@solid-primitives/i18n";
import { useRouteData } from "solid-app-router";
import { Component, For } from "solid-js";
import * as classes from "./ReviewsGrid.css";
import type { ReviewsGridDataLoaderReturn } from "./ReviewsGrid.data";
import { fillGrid } from "./ReviewsGrid.utils";

type Props = {
  data?: string;
};

const ReviewsGrid: Component<Props> = () => {
  const [t] = useI18n();

  const { reviews } = useRouteData<ReviewsGridDataLoaderReturn>();

  return (
    <div>
      {t("ReviewsGrid.text")}
      <div class={classes.container}>
        <For each={fillGrid(reviews()?.data)}>
          {(column, index) => (
            <For each={column}>
              {(cell) => (
                <pre
                  style={{
                    "grid-column-start": index() + 1,
                    "grid-row-start": cell.date.getDay() + 1,
                  }}
                >
                  {JSON.stringify(
                    { cell, day: cell.date.getDay(), index: index() },
                    null,
                    2
                  )}
                </pre>
              )}
            </For>
          )}
        </For>
      </div>
    </div>
  );
};

export default ReviewsGrid;

import { useI18n } from "@solid-primitives/i18n";
import { Component, createResource, For } from "solid-js";
import * as classes from "./ReviewsGrid.css";
import { gridLimit, loader } from "./ReviewsGrid.data";
import { fillGrid, getMonths } from "./ReviewsGrid.utils";
import { ReviewsGridItem } from "./ReviewsGridItem/ReviewsGridItem";

type Props = {
  data?: string;
};

const ReviewsGrid: Component<Props> = () => {
  const [, i18n] = useI18n();

  const [reviews] = createResource(loader);

  return (
    <div class={classes.container}>
      <div class={classes.grid}>
        <For each={getMonths(gridLimit)}>
          {(month) => (
            <span
              class={classes.month}
              style={{
                "grid-column": `${month.start + 1} / span ${month.size}`,
                "grid-row-start": 1,
              }}
            >
              {Intl.DateTimeFormat(i18n.locale(), { month: "short" }).format(
                month.date
              )}
            </span>
          )}
        </For>
        <For each={fillGrid(gridLimit, reviews()?.data)}>
          {(column, index) => (
            <For each={column}>
              {(cell) => (
                <div
                  style={{
                    "grid-column-start": index() + 1,
                    "grid-row-start": cell.date.getDay() + 2,
                  }}
                >
                  <ReviewsGridItem data={cell} />
                </div>
              )}
            </For>
          )}
        </For>
      </div>
    </div>
  );
};

export default ReviewsGrid;

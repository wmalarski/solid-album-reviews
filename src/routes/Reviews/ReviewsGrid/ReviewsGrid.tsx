import { useI18n } from "@solid-primitives/i18n";
import { Component, createResource, For } from "solid-js";
import * as classes from "./ReviewsGrid.css";
import { loader } from "./ReviewsGrid.data";
import { fillGrid } from "./ReviewsGrid.utils";
import { ReviewsGridItem } from "./ReviewsGridItem/ReviewsGridItem";

type Props = {
  data?: string;
};

const ReviewsGrid: Component<Props> = () => {
  const [t] = useI18n();

  const [reviews] = createResource(loader);

  return (
    <div>
      {t("ReviewsGrid.text")}
      <div class={classes.container}>
        <For each={fillGrid(reviews()?.data)}>
          {(column, index) => (
            <For each={column}>
              {(cell) => (
                <div
                  style={{
                    "grid-column-start": index() + 1,
                    "grid-row-start": cell.date.getDay() + 1,
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

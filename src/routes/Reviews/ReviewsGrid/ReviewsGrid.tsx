import { Component, createResource, For } from "solid-js";
import * as classes from "./ReviewsGrid.css";
import { gridLimit, loader } from "./ReviewsGrid.data";
import { fillGrid } from "./ReviewsGrid.utils";
import { ReviewsGridItem } from "./ReviewsGridItem/ReviewsGridItem";

type Props = {
  data?: string;
};

const ReviewsGrid: Component<Props> = () => {
  const [reviews] = createResource(loader);

  return (
    <div class={classes.container}>
      <div class={classes.grid}>
        <For each={fillGrid(gridLimit, reviews()?.data)}>
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

import { Pagination } from "@components/Pagination/Pagination";
import { Component, createSignal, For } from "solid-js";
import * as classes from "./Reviews.css";
import { createReviewsResource, ReviewsLoaderArgs } from "./Reviews.utils";
import { ReviewsFilters } from "./ReviewsFilters/ReviewsFilters";
import { ReviewsListItem } from "./ReviewsListItem/ReviewsListItem";

const Reviews: Component = () => {
  const [page, setPage] = createSignal(0);
  const [args, setArgs] = createSignal<ReviewsLoaderArgs>({
    lower: 0,
    query: "",
    upper: 10,
  });

  const { maxPage, refetch, reviews } = createReviewsResource({
    args,
    page,
  });

  const handleReviewChange = () => {
    refetch();
  };

  return (
    <div class={classes.container}>
      <ReviewsFilters args={args()} onArgsChange={setArgs} />
      <For each={reviews()?.data?.review}>
        {(review) => (
          <ReviewsListItem
            review={review}
            onReviewChange={handleReviewChange}
          />
        )}
      </For>
      <Pagination current={page()} maxPage={maxPage()} onChange={setPage} />
    </div>
  );
};

export default Reviews;

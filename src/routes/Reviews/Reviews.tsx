import { Pagination } from "@components/Pagination/Pagination";
import { useSearchParams } from "solid-app-router";
import { Component, createSignal, For } from "solid-js";
import * as classes from "./Reviews.css";
import { createReviewsResource, ReviewsLoaderArgs } from "./Reviews.utils";
import { ReviewsFilters } from "./ReviewsFilters/ReviewsFilters";
import { ReviewsListItem } from "./ReviewsListItem/ReviewsListItem";

const Reviews: Component = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [args, setArgs] = createSignal<ReviewsLoaderArgs>({
    lower: 0,
    query: "",
    upper: 10,
  });

  const page = () => {
    return Number(searchParams.page || "0");
  };

  const { maxPage, refetch, reviews } = createReviewsResource({
    args,
    page,
  });

  const handlePageChange = (update: number) => {
    setSearchParams({ page: update });
  };

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
      <Pagination
        current={page()}
        maxPage={maxPage()}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default Reviews;

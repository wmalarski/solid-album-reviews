import { Pagination } from "@components/Pagination/Pagination";
import { useRouteData, useSearchParams } from "solid-app-router";
import { Component, For } from "solid-js";
import { ReviewsDataLoaderReturn } from "../Reviews.data";
import * as classes from "./ReviewsList.css";
import { ReviewsListItem } from "./ReviewsListItem/ReviewsListItem";

export const ReviewsList: Component = () => {
  const { reviews, refetch, args, maxPage } =
    useRouteData<ReviewsDataLoaderReturn>();

  const [, setSearchParams] = useSearchParams();

  const handleReviewChange = () => {
    refetch();
  };

  const handlePageChange = (update: number) => {
    setSearchParams({ page: update });
  };

  return (
    <div class={classes.container}>
      <For each={reviews()?.data?.review}>
        {(review) => (
          <ReviewsListItem
            review={review}
            onReviewChange={handleReviewChange}
          />
        )}
      </For>
      <Pagination
        current={args().page}
        maxPage={maxPage()}
        onChange={handlePageChange}
      />
    </div>
  );
};

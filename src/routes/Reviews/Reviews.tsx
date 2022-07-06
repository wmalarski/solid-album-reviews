import { Pagination } from "@components/Pagination/Pagination";
import { useSearchParams } from "solid-app-router";
import { Component, For } from "solid-js";
import * as classes from "./Reviews.css";
import { createReviewsResource, ReviewsLoaderArgs } from "./Reviews.utils";
import { ReviewsFilters } from "./ReviewsFilters/ReviewsFilters";
import { ReviewsListItem } from "./ReviewsListItem/ReviewsListItem";

const Reviews: Component = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const args = (): ReviewsLoaderArgs => {
    return {
      lower: Number(searchParams.lower || "0") || 0,
      query: searchParams.query || "",
      upper: Number(searchParams.upper || "10") || 10,
    };
  };

  const page = () => {
    return Number(searchParams.page || "0");
  };

  const handleArgsChange = (args: ReviewsLoaderArgs) => {
    setSearchParams({ page: 0, ...args });
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
      <ReviewsFilters args={args()} onArgsChange={handleArgsChange} />
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

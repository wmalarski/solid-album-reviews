import { Component } from "solid-js";
import * as classes from "./Reviews.css";
import { ReviewsFilters } from "./ReviewsFilters/ReviewsFilters";
import ReviewsGrid from "./ReviewsGrid/ReviewsGrid";
import { ReviewsList } from "./ReviewsList/ReviewsList";

const Reviews: Component = () => {
  return (
    <div class={classes.container}>
      <ReviewsGrid />
      <ReviewsFilters />
      <ReviewsList />
    </div>
  );
};

export default Reviews;

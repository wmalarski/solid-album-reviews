import { Component } from "solid-js";
import * as classes from "./Reviews.css";
import { ReviewsFilters } from "./ReviewsFilters/ReviewsFilters";
import { ReviewsList } from "./ReviewsList/ReviewsList";

const Reviews: Component = () => {
  return (
    <div class={classes.container}>
      <ReviewsFilters />
      <ReviewsList />
    </div>
  );
};

export default Reviews;

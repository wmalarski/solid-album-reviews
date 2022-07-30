import { graphqlSdk } from "@services/fetcher";
import { createResource } from "solid-js";

const pageLimit = 180;

const loader = () => {
  const date = new Date();
  date.setDate(date.getDate() - pageLimit);

  return graphqlSdk.SelectReviewsGrid({
    limit: pageLimit,
    start: date.toISOString(),
  });
};

export const reviewsGridDataLoader = () => {
  const [reviews, { refetch }] = createResource(loader);

  return { refetch, reviews };
};

export type ReviewsGridDataLoaderReturn = ReturnType<
  typeof reviewsGridDataLoader
>;

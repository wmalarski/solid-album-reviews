import { graphqlSdk } from "@services/fetcher";
import { useNhostStatus } from "@services/nhost";
import { createResource } from "solid-js";

type ReviewsLoaderArgs = {
  isAuthorized: boolean;
};

const pageLimit = 180;

export const loader = ({ isAuthorized }: ReviewsLoaderArgs) => {
  const date = new Date();
  date.setDate(date.getDate() - pageLimit);

  return !isAuthorized
    ? Promise.resolve(null)
    : graphqlSdk.SelectReviewsGrid({
        limit: pageLimit,
        start: date.toISOString(),
      });
};

export const reviewsGridDataLoader = () => {
  const status = useNhostStatus();

  const [reviews, { refetch }] = createResource(
    () => ({ isAuthorized: status() === "auth" }),
    loader
  );

  return { pageLimit, refetch, reviews };
};

export type ReviewsGridDataLoaderReturn = ReturnType<
  typeof reviewsGridDataLoader
>;

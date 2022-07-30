import { graphqlSdk } from "@services/fetcher";

export const gridLimit = 364;

export const loader = () => {
  const date = new Date();
  date.setDate(date.getDate() - gridLimit);

  return graphqlSdk.SelectReviewsGrid({
    limit: gridLimit,
    start: date.toISOString(),
  });
};

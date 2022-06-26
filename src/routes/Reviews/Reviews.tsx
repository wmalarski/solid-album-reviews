import { Pagination } from "@components/Pagination/Pagination";
import { graphqlSdk } from "@services/fetcher";
import { Component, createResource, createSignal, For } from "solid-js";
import * as classes from "./Reviews.css";
import { ReviewsFilters } from "./ReviewsFilters/ReviewsFilters";
import { ReviewsListItem } from "./ReviewsListItem/ReviewsListItem";

type LoaderArgs = {
  page: number;
  query: string;
  lower: number;
  upper: number;
};

const pageLimit = 10;

const loader = ({ page, query, lower, upper }: LoaderArgs) => {
  const pattern = `%${query}%`;
  return graphqlSdk.SelectReviewsWithAlbumAndArtist({
    limit: pageLimit,
    offset: page * pageLimit,
    where: {
      _and: [
        { rate: { _gte: lower } },
        { rate: { _lte: upper } },
        {
          _or: [
            { albumByAlbum: { title: { _ilike: pattern } } },
            { albumByAlbum: { artistByArtist: { name: { _ilike: pattern } } } },
          ],
        },
      ],
    },
  });
};

const Reviews: Component = () => {
  const [range, setRange] = createSignal({ lower: 0, upper: 10 });
  const [page, setPage] = createSignal(0);
  const [query, setQuery] = createSignal("");

  const [selectReviews, { refetch }] = createResource(
    () => ({
      lower: range().lower,
      page: page(),
      query: query(),
      upper: range().upper,
    }),
    loader
  );

  const maxPage = () => {
    const count = selectReviews()?.data?.reviewAggregate.aggregate?.count || 0;
    return Math.ceil(count / pageLimit);
  };

  const handleReviewChange = () => {
    refetch();
  };

  return (
    <div class={classes.container}>
      <ReviewsFilters
        range={range()}
        query={query()}
        onRangeChange={setRange}
        onQueryChange={setQuery}
      />
      <For each={selectReviews()?.data?.review}>
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

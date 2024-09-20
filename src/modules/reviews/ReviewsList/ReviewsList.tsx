import { createAsync, useParams, useSearchParams } from "@solidjs/router";
import { type Component, For, createMemo } from "solid-js";
import { Pagination } from "~/components/pagination";
import { selectReviewIdsLoader } from "~/services/review";
import { ReviewsListItem } from "../ReviewsListItem/ReviewsListItem";
import * as classes from "./ReviewsList.css";

export const ReviewsList: Component = () => {
	const params = useParams();

	const page = createMemo(() => +params.page);

	const reviews = createAsync(() => selectReviewIdsLoader(page()));

	const [, setSearchParams] = useSearchParams();

	const handlePageChange = (update: number) => {
		setSearchParams({ page: update });
	};

	return (
		<div class={classes.container}>
			<For each={reviews()?.data}>
				{(reviewId) => <ReviewsListItem reviewId={reviewId} />}
			</For>
			<Pagination
				page={+params.page}
				count={reviews()?.maxPage ?? 0}
				onPageChange={({ page }) => handlePageChange(page)}
			/>
		</div>
	);
};

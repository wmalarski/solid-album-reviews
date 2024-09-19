import { createAsync, useParams, useSearchParams } from "@solidjs/router";
import { type Component, For, createMemo } from "solid-js";
import { Pagination } from "~/components/Pagination/Pagination";
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
				{(review) => <ReviewsListItem review={review} />}
			</For>
			<Pagination
				current={page()}
				maxPage={reviews()?.maxPage ?? 0}
				onChange={handlePageChange}
			/>
		</div>
	);
};

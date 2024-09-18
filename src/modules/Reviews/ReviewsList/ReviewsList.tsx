import { createAsync, useParams, useSearchParams } from "@solidjs/router";
import { type Component, For } from "solid-js";
import { Pagination } from "~/components/Pagination/Pagination";
import { selectReviewIdsLoader } from "~/services/review";
import * as classes from "./ReviewsList.css";
import { ReviewsListItem } from "./ReviewsListItem/ReviewsListItem";

export const ReviewsList: Component = () => {
	const params = useParams();

	const reviews = createAsync(() => selectReviewIdsLoader(+params.page));

	const [, setSearchParams] = useSearchParams();

	const handleReviewChange = () => {
		refetch();
	};

	const handlePageChange = (update: number) => {
		setSearchParams({ page: update });
	};

	return (
		<div class={classes.container}>
			<For each={reviews()}>
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

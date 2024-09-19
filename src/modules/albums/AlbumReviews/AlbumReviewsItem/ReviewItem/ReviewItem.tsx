import { createAsync } from "@solidjs/router";
import { type Component, Show } from "solid-js";
import { ReviewActions } from "~/modules/reviews/ReviewActions/ReviewActions";
import { ReviewInfo } from "~/modules/reviews/ReviewInfo/ReviewInfo";
import { selectReviewLoader } from "~/services/review";
import type { Album } from "~/store/types";
import { Flex } from "~/styled-system/jsx";

type ReviewItemProps = {
	reviewId: string;
	album: Album;
};

export const ReviewItem: Component<ReviewItemProps> = (props) => {
	const review = createAsync(() => selectReviewLoader(props.reviewId));

	return (
		<Show when={review()}>
			{(review) => (
				<Flex padding="4">
					<ReviewInfo review={review()} />
					<ReviewActions
						album={props.album}
						reviewId={props.reviewId}
						review={review()}
					/>
				</Flex>
			)}
		</Show>
	);
};

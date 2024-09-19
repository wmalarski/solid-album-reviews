import type { Component } from "solid-js";
import { GoogleRedirectButton } from "~/modules/common/GoogleRedirectButton/GoogleRedirectButton";
import { YtRedirectButton } from "~/modules/common/YtRedirectButton/YtRedirectButton";
import { DeleteReviewDialog } from "~/modules/reviews/ReviewActions/DeleteReviewDialog/DeleteReviewDialog";
import { UpdateReviewDialog } from "~/modules/reviews/ReviewActions/UpdateReviewDialog/UpdateReviewDialog";
import type { Album, Review } from "~/store/types";
import { Flex } from "~/styled-system/jsx";

type ReviewActionsProps = {
	reviewId: string;
	album: Album;
	review: Review;
};

export const ReviewActions: Component<ReviewActionsProps> = (props) => {
	return (
		<Flex gap="2" padding="4">
			<YtRedirectButton album={props.album} />
			<GoogleRedirectButton album={props.album} />
			<UpdateReviewDialog review={props.review} reviewId={props.reviewId} />
			<DeleteReviewDialog reviewId={props.reviewId} />
		</Flex>
	);
};

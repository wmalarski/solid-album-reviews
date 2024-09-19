import type { Component } from "solid-js";
import { GoogleRedirectButton } from "~/modules/GoogleRedirectButton/GoogleRedirectButton";
import { YtRedirectButton } from "~/modules/common/YtRedirectButton/YtRedirectButton";
import { DeleteReviewDialog } from "~/modules/reviews/ReviewActions/DeleteReviewDialog/DeleteReviewDialog";
import { UpdateReviewDialog } from "~/modules/reviews/ReviewActions/UpdateReviewDialog/UpdateReviewDialog";
import type { Album, Review } from "~/store/types";
import * as classes from "./ReviewActions.css";

type ReviewActionsProps = {
	reviewId: string;
	album: Album;
	review: Review;
};

export const ReviewActions: Component<ReviewActionsProps> = (props) => {
	return (
		<div class={classes.container}>
			<YtRedirectButton album={props.album} />
			<GoogleRedirectButton album={props.album} />
			<UpdateReviewDialog review={props.review} reviewId={props.reviewId} />
			<DeleteReviewDialog reviewId={props.reviewId} />
		</div>
	);
};

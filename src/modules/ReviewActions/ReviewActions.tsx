import type { Component } from "solid-js";
import { GoogleRedirectButton } from "~/modules/GoogleRedirectButton/GoogleRedirectButton";
import { DeleteReviewDialog } from "~/modules/ReviewActions/DeleteReviewDialog/DeleteReviewDialog";
import { UpdateReviewDialog } from "~/modules/ReviewActions/UpdateReviewDialog/UpdateReviewDialog";
import { YtRedirectButton } from "~/modules/YtRedirectButton/YtRedirectButton";
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

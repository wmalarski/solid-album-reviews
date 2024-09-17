import type { Component } from "solid-js";
import { GoogleRedirectButton } from "~/modules/GoogleRedirectButton/GoogleRedirectButton";
import { DeleteReviewDialog } from "~/modules/ReviewActions/DeleteReviewDialog/DeleteReviewDialog";
import { UpdateReviewDialog } from "~/modules/ReviewActions/UpdateReviewDialog/UpdateReviewDialog";
import { YtRedirectButton } from "~/modules/YtRedirectButton/YtRedirectButton";
import type { Album, Artist, Review } from "~/store/types";
import * as classes from "./ReviewActions.css";

type Props = {
	reviewId: string;
	album: Album;
	artist: Artist;
	review: Review;
	onReviewDelete: () => void;
	onReviewUpdate: () => void;
};

export const ReviewActions: Component<Props> = (props) => {
	return (
		<div class={classes.container}>
			<YtRedirectButton album={props.album} artist={props.artist} />
			<GoogleRedirectButton album={props.album} artist={props.artist} />
			<UpdateReviewDialog
				review={props.review}
				reviewId={props.reviewId}
				onSuccess={() => props.onReviewUpdate()}
			/>
			<DeleteReviewDialog
				reviewId={props.reviewId}
				onSuccess={() => props.onReviewDelete()}
			/>
		</div>
	);
};

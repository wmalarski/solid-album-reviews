import type { Component } from "solid-js";
import { Link } from "~/components/link";
import { AlbumCover } from "~/modules/albums/AlbumCover/AlbumCover";
import { ReviewActions } from "~/modules/reviews/ReviewActions/ReviewActions";
import type { Album, Review } from "~/store/types";
import { formatAlbum } from "~/utils/formatters";
import { paths } from "~/utils/paths";
import { ReviewInfo } from "../ReviewInfo/ReviewInfo";
import * as classes from "./ReviewsListItem.css";

type ReviewsListItemProps = {
	album: Album;
	reviewId: string;
	review: Review;
};

export const ReviewsListItem: Component<ReviewsListItemProps> = (props) => {
	return (
		<div class={classes.container}>
			<AlbumCover
				label={formatAlbum(props.album)}
				sid={props.album.sid}
				kind="small"
			/>
			<div class={classes.right}>
				<Link href={paths.album(props.review.albumId)} class={classes.heading}>
					{formatAlbum(props.album)}
				</Link>
				<ReviewInfo review={props.review} />
				<ReviewActions
					review={props.review}
					album={props.album}
					reviewId={props.reviewId}
				/>
			</div>
		</div>
	);
};

import { createAsync } from "@solidjs/router";
import { type Component, Show } from "solid-js";
import { Link } from "~/components/link";
import { AlbumCover } from "~/modules/albums/AlbumCover/AlbumCover";
import { ReviewActions } from "~/modules/reviews/ReviewActions/ReviewActions";
import { selectAlbumLoader } from "~/services/album";
import { selectReviewLoader } from "~/services/review";
import type { Review } from "~/store/types";
import { css } from "~/styled-system/css";
import { formatAlbum } from "~/utils/formatters";
import { paths } from "~/utils/paths";
import { ReviewInfo } from "../ReviewInfo/ReviewInfo";

type ReviewsListItemViewProps = {
	reviewId: string;
	review: Review;
};

const ReviewsListItemView: Component<ReviewsListItemViewProps> = (props) => {
	const album = createAsync(() => selectAlbumLoader(props.review.albumId));

	return (
		<Show when={album()}>
			{(album) => (
				<div
					class={css({
						backgroundColor: "background",
						display: "flex",
						padding: "4",
					})}
				>
					<AlbumCover
						label={formatAlbum(album())}
						sid={album().sid}
						kind="small"
					/>
					<div
						class={css({
							alignItems: "flex-start",
							display: "flex",
							flexDirection: "column",
						})}
					>
						<Link
							href={paths.album(props.review.albumId)}
							class={css({
								fontSize: "4",
								padding: "4",
							})}
						>
							{formatAlbum(album())}
						</Link>
						<ReviewInfo review={props.review} />
						<ReviewActions
							review={props.review}
							album={album()}
							reviewId={props.reviewId}
						/>
					</div>
				</div>
			)}
		</Show>
	);
};

type ReviewsListItemProps = {
	reviewId: string;
};

export const ReviewsListItem: Component<ReviewsListItemProps> = (props) => {
	const review = createAsync(() => selectReviewLoader(props.reviewId));

	return (
		<Show when={review()}>
			{(review) => (
				<ReviewsListItemView review={review()} reviewId={props.reviewId} />
			)}
		</Show>
	);
};

import type { Component } from "solid-js";
import { Link } from "~/components/link";
import { useI18n } from "~/contexts/I18nContext";
import { AlbumCover } from "~/modules/albums/AlbumCover/AlbumCover";
import { ReviewActions } from "~/modules/reviews/ReviewActions/ReviewActions";
import type { Album, Review } from "~/store/types";
import { formatAlbum, formatDate } from "~/utils/formatters";
import { paths } from "~/utils/paths";
import * as classes from "./ReviewsListItem.css";

type ReviewsListItemProps = {
	album: Album;
	reviewId: string;
	review: Review;
};

export const ReviewsListItem: Component<ReviewsListItemProps> = (props) => {
	const { t, locale } = useI18n();

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
				<div class={classes.data}>
					<span>{t("ReviewItem.rate")}</span>
					<span>{props.review.text}</span>
					<span>{t("ReviewItem.text")}</span>
					<span>{props.review.rate}</span>
					<span>{t("ReviewItem.date")}</span>
					<span>{formatDate(locale(), props.review.createdAt)}</span>
				</div>
				<ReviewActions
					review={props.review}
					album={props.album}
					reviewId={props.reviewId}
				/>
			</div>
		</div>
	);
};

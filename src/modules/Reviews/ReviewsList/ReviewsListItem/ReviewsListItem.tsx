import type { Component } from "solid-js";
import { StyledLink } from "~/components/StyledLink/StyledLink";
import { useI18n } from "~/contexts/I18nContext";
import { AlbumCover } from "~/modules/AlbumCover/AlbumCover";
import { ReviewActions } from "~/modules/ReviewActions/ReviewActions";
import type { Album, Artist, Review } from "~/store/types";
import { formatAlbum, formatDate } from "~/utils/formatters";
import { paths } from "~/utils/paths";
import * as classes from "./ReviewsListItem.css";

type Props = {
	album: Album;
	artist: Artist;
	reviewId: string;
	review: Review;
	onReviewChange: () => void;
};

export const ReviewsListItem: Component<Props> = (props) => {
	const { t, locale } = useI18n();

	return (
		<div class={classes.container}>
			<AlbumCover
				label={formatAlbum(props.album)}
				sid={props.album.sid}
				kind="small"
			/>
			<div class={classes.right}>
				<StyledLink
					href={paths.album(props.review.albumId)}
					class={classes.heading}
				>
					{formatAlbum(props.album)}
				</StyledLink>
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
					artist={props.artist}
					reviewId={props.reviewId}
					onReviewDelete={() => props.onReviewChange()}
					onReviewUpdate={() => props.onReviewChange()}
				/>
			</div>
		</div>
	);
};

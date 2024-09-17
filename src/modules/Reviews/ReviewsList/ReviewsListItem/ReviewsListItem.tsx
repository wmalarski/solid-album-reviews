import { StyledLink } from "@components/StyledLink/StyledLink";
import { AlbumCover } from "@modules/AlbumCover/AlbumCover";
import { ReviewActions } from "@modules/ReviewActions/ReviewActions";
import type { ReviewWithAlbumAndArtistFragment } from "@services/types";
import { formatAlbum, formatDate } from "@utils/formatters";
import type { Component } from "solid-js";
import { useI18n } from "~/contexts/I18nContext";
import { paths } from "~/utils/paths";
import * as classes from "./ReviewsListItem.css";

type Props = {
	review: ReviewWithAlbumAndArtistFragment;
	onReviewChange: () => void;
};

export const ReviewsListItem: Component<Props> = (props) => {
	const { t, locale } = useI18n();

	return (
		<div class={classes.container}>
			<AlbumCover
				label={formatAlbum(props.review.albumByAlbum)}
				sid={props.review.albumByAlbum.sid}
				kind="small"
			/>
			<div class={classes.right}>
				<StyledLink
					href={paths.album(props.review.albumByAlbum.id)}
					class={classes.heading}
				>
					{formatAlbum(props.review.albumByAlbum)}
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
					onReviewDelete={() => props.onReviewChange()}
					onReviewUpdate={() => props.onReviewChange()}
				/>
			</div>
		</div>
	);
};

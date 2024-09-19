import type { Component } from "solid-js";
import { useI18n } from "~/contexts/I18nContext";
import { ReviewActions } from "~/modules/ReviewActions/ReviewActions";
import type { Album, Review } from "~/store/types";
import { formatDate } from "~/utils/formatters";
import * as classes from "./ReviewItem.css";

type ReviewItemProps = {
	reviewId: string;
	album: Album;
	review: Review;
};

export const ReviewItem: Component<ReviewItemProps> = (props) => {
	const { t, locale } = useI18n();

	return (
		<div class={classes.container}>
			<div class={classes.data}>
				<span>{t("ReviewItem.rate")}</span>
				<span>{props.review.rate}</span>
				<span>{t("ReviewItem.text")}</span>
				<span>{props.review.text}</span>
				<span>{t("ReviewItem.date")}</span>
				<span>{formatDate(locale(), props.review.createdAt)}</span>
			</div>
			<ReviewActions
				album={props.album}
				reviewId={props.reviewId}
				review={props.review}
			/>
		</div>
	);
};

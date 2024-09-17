import type { Component } from "solid-js";
import { useI18n } from "~/contexts/I18nContext";
import { ReviewActions } from "~/modules/ReviewActions/ReviewActions";
import type { ReviewFragment } from "~/services/types";
import { formatDate } from "~/utils/formatters";
import * as classes from "./ReviewItem.css";

type Props = {
	review: ReviewFragment;
	onReviewChange: () => void;
};

export const ReviewItem: Component<Props> = (props) => {
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
				onReviewDelete={() => props.onReviewChange()}
				onReviewUpdate={() => props.onReviewChange()}
				review={props.review}
			/>
		</div>
	);
};

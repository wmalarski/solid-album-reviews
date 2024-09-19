import type { Component } from "solid-js";
import { useI18n } from "~/contexts/I18nContext";
import type { Review } from "~/store/types";
import { css } from "~/styled-system/css";
import { formatDate } from "~/utils/formatters";

type ReviewInfoProps = {
	review: Review;
};

export const ReviewInfo: Component<ReviewInfoProps> = (props) => {
	const { t, locale } = useI18n();

	return (
		<div
			class={css({
				display: "grid",
				paddingLeft: "4",
				gap: "4",
				gridTemplateColumns: "auto 1fr",
			})}
		>
			<span>{t("ReviewItem.rate")}</span>
			<span>{props.review.rate}</span>
			<span>{t("ReviewItem.text")}</span>
			<span>{props.review.text}</span>
			<span>{t("ReviewItem.date")}</span>
			<span>{formatDate(locale(), props.review.createdAt)}</span>
		</div>
	);
};

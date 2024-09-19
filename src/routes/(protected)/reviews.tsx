import { ReviewsFilters } from "~/modules/reviews/ReviewsFilters/ReviewsFilters";
import ReviewsGrid from "~/modules/reviews/ReviewsGrid/ReviewsGrid";
import { ReviewsList } from "~/modules/reviews/ReviewsList/ReviewsList";
import { css } from "~/styled-system/css";

export default function Reviews() {
	return (
		<div
			class={css({
				display: "flex",
				flexDirection: "column",
				gap: "4",
				padding: "4",
			})}
		>
			<ReviewsGrid />
			<ReviewsFilters />
			<ReviewsList />
		</div>
	);
}

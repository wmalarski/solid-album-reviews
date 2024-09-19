import { type Component, For, createResource } from "solid-js";
import { useI18n } from "~/contexts/I18nContext";
import { ReviewsGridItem } from "../ReviewsGridItem/ReviewsGridItem";
import * as classes from "./ReviewsGrid.css";
import { gridLimit, loader } from "./ReviewsGrid.data";
import { fillGrid, getMonths } from "./ReviewsGrid.utils";

type ReviewsGridProps = {
	data?: string;
};

const ReviewsGrid: Component<ReviewsGridProps> = () => {
	const { locale } = useI18n();

	const [reviews] = createResource(loader);

	return (
		<div class={classes.container}>
			<div class={classes.grid}>
				<For each={getMonths(gridLimit)}>
					{(month) => (
						<span
							class={classes.month}
							style={{
								"grid-column": `${month.start + 1} / span ${month.size}`,
								"grid-row-start": 1,
							}}
						>
							{Intl.DateTimeFormat(locale(), { month: "short" }).format(
								month.date,
							)}
						</span>
					)}
				</For>
				<For each={fillGrid(gridLimit, reviews()?.data)}>
					{(column, index) => (
						<For each={column}>
							{(cell) => (
								<div
									style={{
										"grid-column-start": index() + 1,
										"grid-row-start": cell.date.getDay() + 2,
									}}
								>
									<ReviewsGridItem data={cell} />
								</div>
							)}
						</For>
					)}
				</For>
			</div>
		</div>
	);
};

export default ReviewsGrid;

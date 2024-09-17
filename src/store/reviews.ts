import { REVIEWS_TABLE_ID, type StoreContext } from "./store";
import { getCreatedAt } from "./utils";

type CreateReviewArgs = {
	rate: number;
	text: string;
	albumId: string;
};

export const createReview = (
	context: StoreContext,
	{ rate, text, albumId }: CreateReviewArgs,
) => {
	context.store.addRow(REVIEWS_TABLE_ID, {
		createdAt: getCreatedAt(),
		albumId,
		rate,
		text,
	});
};

type UpdateReviewArgs = {
	rate?: number | undefined;
	text?: string | undefined;
	reviewId: string;
};

export const updateReview = (
	context: StoreContext,
	{ rate, text, reviewId }: UpdateReviewArgs,
) => {
	context.store.setPartialRow(REVIEWS_TABLE_ID, reviewId, {
		text,
		rate,
	});
};

type DeleteReviewArgs = {
	reviewId: string;
};

export const deleteReview = (
	context: StoreContext,
	{ reviewId }: DeleteReviewArgs,
) => {
	context.store.delRow(REVIEWS_TABLE_ID, reviewId);
};

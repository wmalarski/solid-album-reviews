import { REVIEWS_TABLE_ID, type StoreContext } from "./store";
import { getCreatedAt } from "./utils";

export type SelectReviewArgs = {
	reviewId: string;
};

export const selectReview = (
	context: StoreContext,
	{ reviewId }: SelectReviewArgs,
) => {
	return context.store.getRow(REVIEWS_TABLE_ID, reviewId);
};

export type CreateReviewArgs = {
	rate: number;
	text: string;
	albumId: string;
};

export const createReview = async (
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

export type UpdateReviewArgs = {
	rate?: number | undefined;
	text?: string | undefined;
	reviewId: string;
};

export const updateReview = async (
	context: StoreContext,
	{ rate, text, reviewId }: UpdateReviewArgs,
) => {
	context.store.setPartialRow(REVIEWS_TABLE_ID, reviewId, {
		text,
		rate,
	});
};

export type DeleteReviewArgs = {
	reviewId: string;
};

export const deleteReview = async (
	context: StoreContext,
	{ reviewId }: DeleteReviewArgs,
) => {
	context.store.delRow(REVIEWS_TABLE_ID, reviewId);
};

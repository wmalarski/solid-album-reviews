import { action, cache } from "@solidjs/router";
import {
	createReview,
	deleteReview,
	selectReview,
	updateReview,
} from "~/store/reviews";
import { getStoreContext } from "~/store/store";
import { invalidDataError } from "./errors";

export const SELECT_REVIEW_LOADER_CACHE_KEY = "selectReviewLoader";

export const selectReviewLoader = cache(async (reviewId: string) => {
	const storeContext = getStoreContext();
	const review = selectReview(storeContext, { reviewId });

	if (!review.albumId) {
		throw invalidDataError();
	}

	return review;
}, SELECT_REVIEW_LOADER_CACHE_KEY);

export const createReviewAction = action(createReview);

export const updateReviewAction = action(updateReview);

export const deleteReviewAction = action(deleteReview);

import { action, cache } from "@solidjs/router";
import {
	createReview,
	deleteReview,
	selectAlbumReviews,
	selectReview,
	selectReviews,
	updateReview,
} from "~/store/reviews";
import { getStoreContext } from "~/store/store";
import type { Review } from "~/store/types";
import { invalidDataError } from "./errors";

export const SELECT_REVIEW_LOADER_CACHE_KEY = "selectReviewLoader";

export const selectReviewLoader = cache(async (reviewId: string) => {
	const storeContext = getStoreContext();
	const review = selectReview(storeContext, { reviewId });

	if (!review.albumId) {
		throw invalidDataError();
	}

	return review as Review;
}, SELECT_REVIEW_LOADER_CACHE_KEY);

export const SELECT_REVIEW_IDS_LOADER_CACHE_KEY = "selectReviewIdsLoader";

export const selectReviewIdsLoader = cache(async (page: number) => {
	const storeContext = getStoreContext();
	return selectReviews(storeContext, { page });
}, SELECT_REVIEW_IDS_LOADER_CACHE_KEY);

export const SELECT_ALBUM_REVIEW_IDS_LOADER_CACHE_KEY =
	"selectAlbumReviewIdsLoader";

export const selectAlbumReviewIdsLoader = cache(
	async (albumId: string, page: number) => {
		return selectAlbumReviews(getStoreContext(), { albumId, page });
	},
	SELECT_ALBUM_REVIEW_IDS_LOADER_CACHE_KEY,
);

export const createReviewAction = action(async (formData: FormData) => {
	return createReview(getStoreContext(), {
		text: formData.get("text") as string,
		rate: Number(formData.get("rate")),
		albumId: formData.get("albumId") as string,
	});
});

export const updateReviewAction = action(async (formData: FormData) => {
	return updateReview(getStoreContext(), {
		reviewId: formData.get("reviewId") as string,
		rate: Number(formData.get("rate")),
		text: formData.get("text") as string,
	});
});

export const deleteReviewAction = action(async (formData: FormData) => {
	return deleteReview(getStoreContext(), {
		reviewId: formData.get("reviewId") as string,
	});
});

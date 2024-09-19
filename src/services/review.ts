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

export const createReviewAction = action(createReview);

export const updateReviewAction = action(updateReview);

export const deleteReviewAction = action(async (formData: FormData) => {
	return deleteReview(getStoreContext(), {
		reviewId: formData.get("reviewId") as string,
	});
});

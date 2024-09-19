import { action, cache } from "@solidjs/router";

import {
	deleteAlbum,
	selectAlbum,
	selectAlbums,
	selectArtistAlbums,
	selectRandom,
	updateAlbum,
} from "~/store/albums";
import { getStoreContext } from "~/store/store";
import type { Album } from "~/store/types";
import { invalidDataError } from "./errors";

export const SELECT_ALBUM_LOADER_CACHE_KEY = "selectAlbumLoader";

export const selectAlbumLoader = cache(async (albumId: string) => {
	const storeContext = getStoreContext();
	const album = selectAlbum(storeContext, { albumId });

	if (!album.artistId) {
		throw invalidDataError();
	}

	return album as Album;
}, SELECT_ALBUM_LOADER_CACHE_KEY);

export const SELECT_ALBUM_IDS_LOADER_CACHE_KEY = "selectAlbumIdsLoader";

export const selectAlbumIdsLoader = cache(async (page: number) => {
	const storeContext = getStoreContext();
	return selectAlbums(storeContext, { page });
}, SELECT_ALBUM_IDS_LOADER_CACHE_KEY);

export const SELECT_ARTIST_ALBUM_IDS_LOADER_CACHE_KEY =
	"selectArtistAlbumIdsLoader";

export const selectArtistAlbumIdsLoader = cache(
	async (artistAlbumId: string, page: number) => {
		const storeContext = getStoreContext();
		const album = selectAlbum(storeContext, { albumId: artistAlbumId });

		if (!album.artistId) {
			throw invalidDataError();
		}

		return selectArtistAlbums(storeContext, { page, artistId: album.artistId });
	},
	SELECT_ARTIST_ALBUM_IDS_LOADER_CACHE_KEY,
);

export const SELECT_RANDOM_IDS_LOADER_CACHE_KEY = "selectRandomIdsLoader";

export const selectRandomIdsLoader = cache(async () => {
	const storeContext = getStoreContext();
	return selectRandom(storeContext);
}, SELECT_RANDOM_IDS_LOADER_CACHE_KEY);

export const updateAlbumAction = action(async (formData: FormData) => {
	return updateAlbum(getStoreContext(), {
		albumId: formData.get("albumId") as string,
		title: formData.get("title") as string,
		year: Number(formData.get("year")),
	});
});

export const deleteAlbumAction = action(async (formData: FormData) => {
	return deleteAlbum(getStoreContext(), {
		albumId: formData.get("albumId") as string,
	});
});

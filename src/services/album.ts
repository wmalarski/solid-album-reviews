import { action, cache } from "@solidjs/router";

import {
	deleteAlbum,
	selectAlbum,
	selectAlbums,
	selectRandom,
	updateAlbum,
} from "~/store/albums";
import { getStoreContext } from "~/store/store";
import { invalidDataError } from "./errors";

export const SELECT_ALBUM_LOADER_CACHE_KEY = "selectAlbumLoader";

export const selectAlbumLoader = cache(async (albumId: string) => {
	const storeContext = getStoreContext();
	const album = selectAlbum(storeContext, { albumId });

	if (!album.artistId) {
		throw invalidDataError();
	}

	return album;
}, SELECT_ALBUM_LOADER_CACHE_KEY);

export const SELECT_ALBUM_IDS_LOADER_CACHE_KEY = "selectAlbumIdsLoader";

export const selectAlbumIdsLoader = cache(async (page: number) => {
	const storeContext = getStoreContext();
	return selectAlbums(storeContext, { page });
}, SELECT_ALBUM_IDS_LOADER_CACHE_KEY);

export const SELECT_RANDOM_IDS_LOADER_CACHE_KEY = "selectRandomIdsLoader";

export const selectRandomIdsLoader = cache(async () => {
	const storeContext = getStoreContext();
	return selectRandom(storeContext);
}, SELECT_RANDOM_IDS_LOADER_CACHE_KEY);

export const updateAlbumAction = action(updateAlbum);

export const deleteAlbumAction = action(deleteAlbum);

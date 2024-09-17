import { action, cache } from "@solidjs/router";

import { deleteAlbum, selectAlbum, updateAlbum } from "~/store/albums";
import { getStoreContext } from "~/store/store";
import { invalidDataError } from "./errors";

export const SELECT_BOARDS_DEFAULT_LIMIT = 10;

export const SELECT_ALBUM_LOADER_CACHE_KEY = "selectAlbumLoader";

export const selectAlbumLoader = cache(async (albumId: string) => {
	const storeContext = getStoreContext();
	const album = selectAlbum(storeContext, { albumId });

	if (!album.artistId) {
		throw invalidDataError();
	}

	return album;
}, SELECT_ALBUM_LOADER_CACHE_KEY);

export const updateAlbumAction = action(updateAlbum);

export const deleteAlbumAction = action(deleteAlbum);

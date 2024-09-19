import { cache } from "@solidjs/router";

import { selectArtist } from "~/store/artists";
import { getStoreContext } from "~/store/store";
import type { Artist } from "~/store/types";
import { invalidDataError } from "./errors";

export const SELECT_ARTIST_LOADER_CACHE_KEY = "selectArtistLoader";

export const selectArtistLoader = cache(async (artistId: string) => {
	const storeContext = getStoreContext();
	const artist = selectArtist(storeContext, { artistId });

	if (!artist.createdAt) {
		throw invalidDataError();
	}

	return artist as Artist;
}, SELECT_ARTIST_LOADER_CACHE_KEY);

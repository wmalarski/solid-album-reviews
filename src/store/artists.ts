import { ARTIST_TABLE_ID, type StoreContext } from "./store";

type SelectArtistArgs = {
	artistId: string;
};

export const selectArtist = (
	context: StoreContext,
	{ artistId }: SelectArtistArgs,
) => {
	return context.store.getRow(ARTIST_TABLE_ID, artistId);
};

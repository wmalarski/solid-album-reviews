import { ALBUMS_TABLE_ID, type StoreContext } from "./store";

type SelectAlbumArgs = {
	albumId: string;
};

export const selectAlbum = (
	context: StoreContext,
	{ albumId }: SelectAlbumArgs,
) => {
	return context.store.getRow(ALBUMS_TABLE_ID, albumId);
};

type UpdateAlbumArgs = {
	year?: number | undefined;
	title?: string | undefined;
	albumId: string;
};

export const updateAlbum = (
	context: StoreContext,
	{ albumId, title, year }: UpdateAlbumArgs,
) => {
	context.store.setPartialRow(ALBUMS_TABLE_ID, albumId, {
		title,
		year,
	});
};

type DeleteAlbumArgs = {
	albumId: string;
};

export const deleteAlbum = (
	context: StoreContext,
	{ albumId }: DeleteAlbumArgs,
) => {
	context.store.delRow(ALBUMS_TABLE_ID, albumId);
};

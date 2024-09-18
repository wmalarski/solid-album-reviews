import { ALBUMS_TABLE_ID, type StoreContext } from "./store";

export type SelectAlbumArgs = {
	albumId: string;
};

export const selectAlbum = (
	context: StoreContext,
	{ albumId }: SelectAlbumArgs,
) => {
	return context.store.getRow(ALBUMS_TABLE_ID, albumId);
};

export const SELECT_ALBUMS_LIMIT = 20;

export type SelectAlbumsArgs = {
	page: number;
	limit?: number;
};

export const selectAlbums = (
	context: StoreContext,
	{ page, limit = SELECT_ALBUMS_LIMIT }: SelectAlbumsArgs,
) => {
	return context.store
		.getRowIds(ALBUMS_TABLE_ID)
		.slice(page * limit, (page + 1) * limit);
};

export type UpdateAlbumArgs = {
	year?: number | undefined;
	title?: string | undefined;
	albumId: string;
};

export const updateAlbum = async (
	context: StoreContext,
	{ albumId, title, year }: UpdateAlbumArgs,
) => {
	context.store.setPartialRow(ALBUMS_TABLE_ID, albumId, {
		title,
		year,
	});
};

export type DeleteAlbumArgs = {
	albumId: string;
};

export const deleteAlbum = async (
	context: StoreContext,
	{ albumId }: DeleteAlbumArgs,
) => {
	context.store.delRow(ALBUMS_TABLE_ID, albumId);
};

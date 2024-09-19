import {
	ALBUMS_TABLE_ID,
	ARTIST_ALBUM_RELATIONSHIPS_ID,
	type StoreContext,
} from "./store";
import type { Album } from "./types";
import { getPage } from "./utils";

export type SelectAlbumArgs = {
	albumId: string;
};

export const selectAlbum = (
	context: StoreContext,
	{ albumId }: SelectAlbumArgs,
) => {
	return context.store.getRow(ALBUMS_TABLE_ID, albumId) as Album;
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
	const ids = context.store.getRowIds(ALBUMS_TABLE_ID);
	return getPage({ data: ids, limit, page });
};

export type SelectArtistAlbumsArgs = {
	artistId: string;
	page: number;
	limit?: number;
};

export const selectArtistAlbums = (
	context: StoreContext,
	{ artistId, page, limit = SELECT_ALBUMS_LIMIT }: SelectArtistAlbumsArgs,
) => {
	const ids = context.relationships.getLocalRowIds(
		ARTIST_ALBUM_RELATIONSHIPS_ID,
		artistId,
	);
	return getPage({ data: ids, limit, page });
};

export type SelectRandomArgs = {
	limit?: number;
};

export const selectRandom = (
	context: StoreContext,
	{ limit = SELECT_ALBUMS_LIMIT }: SelectRandomArgs = {},
) => {
	const length = context.store.getRowCount(ALBUMS_TABLE_ID);
	const ids = context.store.getRowIds(ALBUMS_TABLE_ID);

	return Array.from(
		{ length: limit },
		() => ids[Math.floor(Math.random() * length)],
	);
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

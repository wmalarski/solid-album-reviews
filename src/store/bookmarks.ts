import { BOOKMARKS_TABLE_ID, type StoreContext } from "./store";
import { getCreatedAt } from "./utils";

type CreateBookmarkArgs = {
	albumId: string;
};

export const createBookmark = (
	context: StoreContext,
	{ albumId }: CreateBookmarkArgs,
) => {
	context.store.addRow(BOOKMARKS_TABLE_ID, {
		createdAt: getCreatedAt(),
		albumId,
	});
};

type DeleteBookmarkArgs = {
	bookmarkId: string;
};

export const deleteBookmark = (
	context: StoreContext,
	{ bookmarkId }: DeleteBookmarkArgs,
) => {
	context.store.delRow(BOOKMARKS_TABLE_ID, bookmarkId);
};

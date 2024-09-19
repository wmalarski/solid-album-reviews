import { createRelationships, createStore } from "tinybase/with-schemas";

export const ARTIST_TABLE_ID = "artist";
export const ALBUMS_TABLE_ID = "albums";
export const REVIEWS_TABLE_ID = "reviews";
export const BOOKMARKS_TABLE_ID = "bookmarks";
export const ARTIST_ALBUM_RELATIONSHIPS_ID = "artist-album";
export const ALBUM_REVIEW_RELATIONSHIPS_ID = "album-review";

const store = createStore().setTablesSchema({
	[ARTIST_TABLE_ID]: {
		createdAt: { type: "number" },
		sid: { type: "string" },
		name: { type: "string" },
	},
	[ALBUMS_TABLE_ID]: {
		artistId: { type: "string" },
		covers: { type: "string" },
		createdAt: { type: "number" },
		release: { type: "number" },
		sid: { type: "string" },
		title: { type: "string" },
		year: { type: "number" },
	},
	[REVIEWS_TABLE_ID]: {
		albumId: { type: "string" },
		createdAt: { type: "number" },
		rate: { type: "number" },
		text: { type: "string" },
	},
	[BOOKMARKS_TABLE_ID]: {
		albumId: { type: "string" },
		createdAt: { type: "number" },
	},
});

const relationships = createRelationships(store);

relationships.setRelationshipDefinition(
	ARTIST_ALBUM_RELATIONSHIPS_ID,
	ALBUMS_TABLE_ID,
	ARTIST_TABLE_ID,
	"artistId",
);

relationships.setRelationshipDefinition(
	ALBUM_REVIEW_RELATIONSHIPS_ID,
	REVIEWS_TABLE_ID,
	ALBUMS_TABLE_ID,
	"albumId",
);

export type StoreContext = {
	store: typeof store;
	relationships: typeof relationships;
};

export const getStoreContext = (): StoreContext => {
	return { store, relationships };
};

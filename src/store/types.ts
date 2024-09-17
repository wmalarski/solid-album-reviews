export type Artist = {
	createdAt: number;
	sid: string;
	name: string;
};

export type Album = {
	artistId: string;
	covers: string;
	createdAt: number;
	release: number;
	sid: string;
	title: string;
	year: number;
};

export type Review = {
	albumId: string;
	createdAt: number;
	rate: number;
	text: string;
};

export type Bookmark = {
	albumId: string;
	createdAt: number;
};

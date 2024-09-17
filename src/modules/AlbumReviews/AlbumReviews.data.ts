import type { RouteDataFunc } from "solid-app-router";
import { createResource } from "solid-js";
import { graphqlSdk } from "~/services/fetcher";
import { useNhostStatus } from "~/services/nhost";
import type { AlbumDataLoaderResult } from "../Album/Album.data";

type AlbumsLoaderArgs = {
	page: number;
	albumId: number;
	isAuthorized: boolean;
};

const pageLimit = 20;

const albumsLoader = ({ page, albumId, isAuthorized }: AlbumsLoaderArgs) => {
	return isAuthorized
		? graphqlSdk.SelectAlbumsWithReviews({
				limit: pageLimit,
				offset: page * pageLimit,
				where: {
					artistByArtist: {
						albums: {
							id: {
								_eq: albumId,
							},
						},
					},
				},
			})
		: Promise.resolve(null);
};

export const albumReviewsDataLoader = ({
	location,
	data,
}: Parameters<RouteDataFunc>[0]) => {
	const status = useNhostStatus();

	const {
		album,
		albumId,
		refetch: refetchAlbum,
	} = data as AlbumDataLoaderResult;

	const page = () => {
		return +(location.query.page || "0");
	};

	const [albums, { refetch: refetchAlbums }] = createResource(
		() => ({
			albumId: albumId(),
			isAuthorized: status() === "auth",
			page: page(),
		}),
		albumsLoader,
	);

	const maxPage = () => {
		const count = albums()?.data?.albumAggregate.aggregate?.count || 0;
		return Math.ceil(count / pageLimit);
	};

	return { album, albumId, albums, maxPage, page, refetchAlbum, refetchAlbums };
};

export type AlbumReviewDataLoaderResult = ReturnType<
	typeof albumReviewsDataLoader
>;

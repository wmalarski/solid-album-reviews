import type { RouteDataFunc } from "solid-app-router";
import { createResource } from "solid-js";
import { graphqlSdk } from "~/services/fetcher";
import { useNhostStatus } from "~/services/nhost";

type AlbumLoaderArgs = {
	albumId: number;
	isAuthorized: boolean;
};

const albumLoader = ({ albumId, isAuthorized }: AlbumLoaderArgs) => {
	return isAuthorized
		? graphqlSdk.SelectAlbum({ id: albumId })
		: Promise.resolve(null);
};

export const albumDataLoader = ({ params }: Parameters<RouteDataFunc>[0]) => {
	const status = useNhostStatus();

	const albumId = () => {
		return +params.albumId;
	};

	const [album, { refetch }] = createResource(
		() => ({ albumId: albumId(), isAuthorized: status() === "auth" }),
		albumLoader,
	);

	return { album, albumId, refetch };
};

export type AlbumDataLoaderResult = ReturnType<typeof albumDataLoader>;

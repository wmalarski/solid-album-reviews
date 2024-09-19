import type { RouteDataFunc } from "solid-app-router";
import { createResource } from "solid-js";
import { graphqlSdk } from "~/services/fetcher";
import { useNhostStatus } from "~/services/nhost";

const pageLimit = 10;

type LoaderArgs = {
	page: number;
	query: string;
	isAuthorized: boolean;
};

const loader = ({ page, query, isAuthorized }: LoaderArgs) => {
	const pattern = `%${query}%`;
	return isAuthorized
		? graphqlSdk.SelectAlbumsWithArtist({
				limit: pageLimit,
				offset: page * pageLimit,
				where: {
					_or: [
						{ title: { _ilike: pattern } },
						{ artistByArtist: { name: { _ilike: pattern } } },
					],
				},
			})
		: Promise.resolve(null);
};

export const searchDataLoader = ({
	location,
}: Parameters<RouteDataFunc>[0]) => {
	const status = useNhostStatus();

	const [albums, { refetch }] = createResource(
		() => ({
			isAuthorized: status() === "auth",
			page: +(location.query.page || 0),
			query: location.query.query || "",
		}),
		loader,
	);

	const maxPage = () => {
		const count = albums()?.data?.albumAggregate.aggregate?.count || 0;
		return Math.ceil(count / pageLimit);
	};

	const page = () => {
		return +(location.query.page || "0") || 0;
	};

	return { albums, maxPage, page, refetch };
};

export type SearchDataLoaderResult = ReturnType<typeof searchDataLoader>;

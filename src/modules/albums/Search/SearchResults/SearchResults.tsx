import { useParams, useSearchParams } from "@solidjs/router";
import { type Component, For } from "solid-js";
import { Pagination } from "~/components/pagination";
import { ResultItem } from "../ResultItem/ResultItem";
import type { SearchDataLoaderResult } from "../Search.data";
import * as classes from "./SearchResults.css";

export const SearchResults: Component = () => {
	const params = useParams();

	const [, setSearchParams] = useSearchParams();

	const { albums, maxPage, page } = useRouteData<SearchDataLoaderResult>();

	const handlePageChange = (update: number) => {
		setSearchParams({ page: update });
	};

	return (
		<div class={classes.container}>
			<For each={albums()?.data?.album}>
				{(album) => <ResultItem album={album} />}
			</For>
			<Pagination
				page={+params.page}
				count={albums()?.maxPage ?? 0}
				onPageChange={({ page }) => handlePageChange(page)}
			/>
		</div>
	);
};

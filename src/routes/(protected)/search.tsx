import type { Component } from "solid-js";
import { SearchInput } from "~/modules/albums/Search/SearchInput/SearchInput";
import { SearchResults } from "~/modules/albums/Search/SearchResults/SearchResults";
import { css } from "~/styled-system/css";

const Search: Component = () => {
	return (
		<div
			class={css({
				display: "flex",
				flexDirection: "column",
				gap: "4",
				padding: "4",
			})}
		>
			<SearchInput />
			<SearchResults />
		</div>
	);
};

export default Search;

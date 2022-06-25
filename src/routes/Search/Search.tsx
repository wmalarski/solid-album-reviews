import { Pagination } from "@components/Pagination/Pagination";
import { graphqlSdk } from "@services/fetcher";
import { Component, createResource, createSignal, Show } from "solid-js";
import * as classes from "./Search.css";
import { SearchInput } from "./SearchInput/SearchInput";
import { SearchResults } from "./SearchResults/SearchResults";

type LoaderArgs = {
  page: number;
  query: string;
};

const pageLimit = 10;

const loader = ({ page, query }: LoaderArgs) => {
  const pattern = `%${query}%`;
  return graphqlSdk.SelectAlbums({
    offset: page * pageLimit,
    limit: pageLimit,
    where: {
      _or: [
        { title: { _ilike: pattern } },
        { artistByArtist: { name: { _ilike: pattern } } },
      ],
    },
  });
};

const Search: Component = () => {
  const [page, setPage] = createSignal(0);
  const [query, setQuery] = createSignal("");

  const [selectAlbums] = createResource(
    () => ({ page: page(), query: query() }),
    loader
  );

  const maxPage = () => {
    const count = selectAlbums()?.data?.albumAggregate.aggregate?.count || 0;
    return Math.ceil(count / pageLimit);
  };

  return (
    <div class={classes.container}>
      <SearchInput onQueryChange={setQuery} />
      <Show when={selectAlbums()?.data?.album}>
        {(albums) => <SearchResults albums={albums} />}
      </Show>
      <Pagination current={page()} maxPage={maxPage()} onChange={setPage} />
    </div>
  );
};

export default Search;

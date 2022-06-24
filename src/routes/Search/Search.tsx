import { Pagination } from "@components/Pagination/Pagination";
import { graphqlSdk } from "@services/fetcher";
import { useSearchParams } from "solid-app-router";
import { Component, createResource, Show } from "solid-js";
import * as classes from "./Search.css";
import { SearchInput } from "./SearchInput/SearchInput";
import { SearchResults } from "./SearchResults/SearchResults";

type SearchParams = {
  query?: string;
  page?: string;
};

type LoaderArgs = {
  page: number;
  query?: string;
};

const pageLimit = 20;

const loader = ({ page = 0, query = "" }: LoaderArgs) => {
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
  const [searchParams, setSearchParams] = useSearchParams<SearchParams>();
  const pageParam = searchParams.page || "";
  const page = /\d+/.test(pageParam) ? Number(pageParam) : 0;

  const [selectAlbums] = createResource(
    () => ({ page, query: searchParams.query }),
    loader
  );

  const handleSearchChange = (query: string) => {
    setSearchParams({ query });
  };

  const handlePageChange = (next: number) => {
    console.log({ searchParams, next });
    setSearchParams({ query: searchParams.query, page: next });
  };

  const maxPage = () => {
    const count = selectAlbums()?.data?.albumAggregate.aggregate?.count || 0;
    return Math.ceil(count / pageLimit);
  };

  return (
    <div class={classes.container}>
      <SearchInput onSearchChange={handleSearchChange} />
      <Show when={selectAlbums()?.data?.album}>
        {(albums) => <SearchResults albums={albums} />}
      </Show>
      <Pagination
        current={page}
        maxPage={maxPage()}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default Search;

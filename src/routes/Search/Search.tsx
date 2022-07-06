import { useSearchParams } from "solid-app-router";
import { Component, createSignal } from "solid-js";
import * as classes from "./Search.css";
import { SearchResourceProvider } from "./Search.utils";
import { SearchInput } from "./SearchInput/SearchInput";
import { SearchResults } from "./SearchResults/SearchResults";

const Search: Component = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = createSignal("");

  const handlePageChange = (update: number) => {
    setSearchParams({ page: update });
  };

  const page = () => {
    return Number(searchParams.page || "0");
  };

  return (
    <SearchResourceProvider page={page()} query={query()}>
      <div class={classes.container}>
        <SearchInput onQueryChange={setQuery} />
        <SearchResults page={page()} onPageChange={handlePageChange} />
      </div>
    </SearchResourceProvider>
  );
};

export default Search;

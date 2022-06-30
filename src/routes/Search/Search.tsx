import { Component, createSignal } from "solid-js";
import * as classes from "./Search.css";
import { SearchResourceProvider } from "./Search.utils";
import { SearchInput } from "./SearchInput/SearchInput";
import { SearchResults } from "./SearchResults/SearchResults";

const Search: Component = () => {
  const [page, setPage] = createSignal(0);
  const [query, setQuery] = createSignal("");

  return (
    <SearchResourceProvider page={page()} query={query()}>
      <div class={classes.container}>
        <SearchInput onQueryChange={setQuery} />
        <SearchResults page={page()} onPageChange={setPage} />
      </div>
    </SearchResourceProvider>
  );
};

export default Search;

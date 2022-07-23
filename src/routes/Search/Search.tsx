import { useSearchParams } from "solid-app-router";
import { Component } from "solid-js";
import * as classes from "./Search.css";
import { SearchInput } from "./SearchInput/SearchInput";
import { SearchResults } from "./SearchResults/SearchResults";

const Search: Component = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageChange = (update: number) => {
    setSearchParams({ page: update });
  };

  const handleQueryChange = (update: string) => {
    setSearchParams({ page: 0, query: update });
  };

  const page = () => {
    return Number(searchParams.page || "0") || 0;
  };

  return (
    <div class={classes.container}>
      <SearchInput onQueryChange={handleQueryChange} />
      <SearchResults page={page()} onPageChange={handlePageChange} />
    </div>
  );
};

export default Search;

import { Component } from "solid-js";
import * as classes from "./Search.css";
import { SearchInput } from "./SearchInput/SearchInput";
import { SearchResults } from "./SearchResults/SearchResults";

const Search: Component = () => {
  return (
    <div class={classes.container}>
      <SearchInput />
      <SearchResults />
    </div>
  );
};

export default Search;

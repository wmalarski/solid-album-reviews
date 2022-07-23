import { Pagination } from "@components/Pagination/Pagination";
import { useRouteData, useSearchParams } from "solid-app-router";
import { Component, For } from "solid-js";
import { SearchDataLoaderResult } from "../Search.data";
import { ResultItem } from "./ResultItem/ResultItem";
import * as classes from "./SearchResults.css";

export const SearchResults: Component = () => {
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
        current={page()}
        maxPage={maxPage()}
        onChange={handlePageChange}
      />
    </div>
  );
};

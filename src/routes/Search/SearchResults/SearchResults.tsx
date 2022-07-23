import { Pagination } from "@components/Pagination/Pagination";
import { useRouteData } from "solid-app-router";
import { Component, For } from "solid-js";
import { SearchDataLoaderResult } from "../Search.data";
import { ResultItem } from "./ResultItem/ResultItem";
import * as classes from "./SearchResults.css";

type Props = {
  page: number;
  onPageChange: (page: number) => void;
};

export const SearchResults: Component<Props> = (props) => {
  const { albums, maxPage } = useRouteData<SearchDataLoaderResult>();

  return (
    <div class={classes.container}>
      <For each={albums()?.data?.album}>
        {(album) => <ResultItem album={album} />}
      </For>
      <Pagination
        current={props.page}
        maxPage={maxPage()}
        onChange={(page) => props.onPageChange(page)}
      />
    </div>
  );
};

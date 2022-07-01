import { Pagination } from "@components/Pagination/Pagination";
import { Component, For } from "solid-js";
import { useSearchResource } from "../Search.utils";
import { ResultItem } from "./ResultItem/ResultItem";
import * as classes from "./SearchResults.css";

type Props = {
  page: number;
  onPageChange: (page: number) => void;
};

export const SearchResults: Component<Props> = (props) => {
  const { albums, maxPage } = useSearchResource();

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

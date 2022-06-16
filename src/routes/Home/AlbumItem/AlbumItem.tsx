import type { Component } from "solid-js";

type Props = {
  title: string;
};

export const AlbumItem: Component<Props> = (props) => {
  return <span>{props.title}</span>;
};

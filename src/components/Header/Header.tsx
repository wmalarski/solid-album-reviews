import type { Component } from "solid-js";
import * as classes from "./Header.css";

export const Header: Component = () => {
  return (
    <header class={classes.container}>
      <a href="/">Album Reviews</a>
    </header>
  );
};

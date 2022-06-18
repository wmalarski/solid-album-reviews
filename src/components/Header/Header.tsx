import { signOut } from "@services/SessionProvider";
import type { Component } from "solid-js";
import * as classes from "./Header.css";

export const Header: Component = () => {
  return (
    <header class={classes.container}>
      <a href="/">Album Reviews</a>
      <button
        onClick={() => {
          // auth0Client.loginWithRedirect();
          signOut();
        }}
      >
        Sign Out
      </button>
    </header>
  );
};

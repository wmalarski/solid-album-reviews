import { Outlet } from "solid-app-router";
import { Component } from "solid-js";
import * as classes from "./Auth.css";

const Auth: Component = () => {
  return (
    <div class={classes.container}>
      <div class={classes.card}>
        <Outlet />
      </div>
    </div>
  );
};

export default Auth;

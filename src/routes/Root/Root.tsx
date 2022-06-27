import { useNhostStatus } from "@services/nhost";
import { Outlet } from "solid-app-router";
import { Component, Show } from "solid-js";
import { Loading } from "./Loading/Loading";
import * as classes from "./Root.css";

const Root: Component = () => {
  const status = useNhostStatus();

  return (
    <div class={classes.container}>
      <Show when={status() !== "loading"} fallback={<Loading />}>
        <Outlet />
      </Show>
    </div>
  );
};

export default Root;

import { session } from "@services/SessionProvider";
import { Outlet } from "solid-app-router";
import { Component, Show } from "solid-js";
import { Loading } from "./Loading/Loading";

const Root: Component = () => {
  return (
    <Show when={session().status !== "loading"} fallback={<Loading />}>
      <Outlet />
    </Show>
  );
};

export default Root;

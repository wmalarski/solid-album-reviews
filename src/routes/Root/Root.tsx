import { useNhostStatus } from "@services/nhost";
import { Outlet } from "solid-app-router";
import { Component, Show } from "solid-js";
import { Loading } from "./Loading/Loading";

const Root: Component = () => {
  const status = useNhostStatus();

  return (
    <Show when={status() !== "loading"} fallback={<Loading />}>
      <Outlet />
    </Show>
  );
};

export default Root;

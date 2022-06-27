import { Header } from "@modules/Header/Header";
import { useNhostStatus } from "@services/nhost";
import { paths } from "@utils/paths";
import { Navigate, Outlet } from "solid-app-router";
import { Component, Show } from "solid-js";
import * as classes from "./Protected.css";

const Protected: Component = () => {
  const status = useNhostStatus();

  return (
    <Show
      when={status() === "auth"}
      fallback={<Navigate href={paths.signIn} />}
    >
      <Header />
      <div class={classes.container}>
        <Outlet />
      </div>
    </Show>
  );
};

export default Protected;

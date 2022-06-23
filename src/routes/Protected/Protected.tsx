import { Header } from "@components/Header/Header";
import { useNhostStatus } from "@services/nhost";
import { paths } from "@utils/paths";
import { Navigate, Outlet } from "solid-app-router";
import { Component, Show } from "solid-js";

const Protected: Component = () => {
  const status = useNhostStatus();

  return (
    <Show
      when={status() === "auth"}
      fallback={<Navigate href={paths.signIn} />}
    >
      <Header />
      <Outlet />
    </Show>
  );
};

export default Protected;

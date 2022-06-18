import { session } from "@services/SessionProvider";
import { paths } from "@utils/paths";
import { Navigate, Outlet } from "solid-app-router";
import { Component, Show } from "solid-js";

const Protected: Component = () => {
  return (
    <Show
      when={session().status === "auth"}
      fallback={<Navigate href={paths.auth} />}
    >
      <Outlet />
    </Show>
  );
};

export default Protected;

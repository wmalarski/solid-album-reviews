import { nhostSession } from "@services/nhost";
import { paths } from "@utils/paths";
import { Navigate, Outlet } from "solid-app-router";
import { Component, Show } from "solid-js";

const Protected: Component = () => {
  return (
    <Show
      when={nhostSession().status === "auth"}
      fallback={<Navigate href={paths.signIn} />}
    >
      <Outlet />
    </Show>
  );
};

export default Protected;

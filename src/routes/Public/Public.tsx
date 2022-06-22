import { nhostSession } from "@services/nhost";
import { paths } from "@utils/paths";
import { Navigate, Outlet } from "solid-app-router";
import { Component, Show } from "solid-js";

const Public: Component = () => {
  return (
    <Show
      when={nhostSession().status === "anon"}
      fallback={<Navigate href={paths.root} />}
    >
      <Outlet />
    </Show>
  );
};

export default Public;

import { session } from "@services/SessionProvider";
import { Navigate } from "solid-app-router";
import { Component, JSX, Show } from "solid-js";
import { paths } from "./paths";

type Props = {
  children: JSX.Element;
};

export const ProtectedRoute: Component<Props> = (props): JSX.Element => {
  return (
    <>
      <Show when={session().status === "anon"}>
        <Navigate href={paths.login} />
      </Show>
      {props.children}
    </>
  );
};

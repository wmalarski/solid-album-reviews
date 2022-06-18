import { handleRedirectCallback } from "@services/SessionProvider";
import { Component, createResource } from "solid-js";

const LoginCallback: Component = () => {
  createResource(handleRedirectCallback);

  return null;
};

export default LoginCallback;

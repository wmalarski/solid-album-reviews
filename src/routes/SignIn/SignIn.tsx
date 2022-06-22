import { ErrorPayload } from "@nhost/core";
import { SignInParams } from "@nhost/hasura-auth-js";
import { nhost } from "@services/nhost";
import { Component, createSignal } from "solid-js";
import { SignInForm } from "./SignInForm/SignInForm";

const SignIn: Component = () => {
  const [error, setError] = createSignal<ErrorPayload | null>(null);

  const handleSubmit = async (args: SignInParams) => {
    try {
      const response = await nhost.auth.signIn(args);
      setError(response.error);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error({ error });
    }
  };

  return <SignInForm error={error()} onSubmit={handleSubmit} />;
};

export default SignIn;

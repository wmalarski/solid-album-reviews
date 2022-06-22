import { ErrorPayload } from "@nhost/core";
import { nhost } from "@services/nhost";
import { paths } from "@utils/paths";
import { useNavigate } from "solid-app-router";
import { Component, createSignal } from "solid-js";
import { SignUpForm, SignUpFormArgs } from "./SignUpForm/SignUpForm";

const SignUp: Component = () => {
  const navigate = useNavigate();

  const [error, setError] = createSignal<ErrorPayload | null>(null);

  const handleSubmit = async (args: SignUpFormArgs) => {
    try {
      const response = await nhost.auth.signUp(args);
      setError(response.error);
      if (!response.error) {
        navigate(paths.signIn);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error({ error });
    }
  };

  return <SignUpForm error={error()} onSubmit={handleSubmit} />;
};

export default SignUp;

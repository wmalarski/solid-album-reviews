import { nhost } from "@services/nhost";
import { Component } from "solid-js";
import { SignInForm, SignInFormArgs } from "./SignInForm/SignInForm";

const SignIn: Component = () => {
  const handleSubmit = async (args: SignInFormArgs) => {
    const response = await nhost.auth.signIn(args);
    console.log({ response });
  };

  return <SignInForm onSubmit={handleSubmit} />;
};

export default SignIn;

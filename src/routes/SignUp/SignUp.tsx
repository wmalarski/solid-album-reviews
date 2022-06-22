import { nhost } from "@services/nhost";
import { paths } from "@utils/paths";
import { useNavigate } from "solid-app-router";
import { Component } from "solid-js";
import { SignUpForm, SignUpFormArgs } from "./SignUpForm/SignUpForm";

const SignUp: Component = () => {
  const navigate = useNavigate();

  const handleSubmit = async (args: SignUpFormArgs) => {
    const response = await nhost.auth.signUp(args);
    console.log({ response });
    navigate(paths.signIn);
  };

  return <SignUpForm onSubmit={handleSubmit} />;
};

export default SignUp;

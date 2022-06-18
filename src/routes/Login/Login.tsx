import { signIn } from "@services/SessionProvider";
import { Component } from "solid-js";

const Login: Component = () => {
  return (
    <div>
      <button onClick={() => signIn()}>Login</button>
    </div>
  );
};

export default Login;

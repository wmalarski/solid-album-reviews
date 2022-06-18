import { signIn } from "@services/SessionProvider";
import { useI18n } from "@solid-primitives/i18n";
import { Component } from "solid-js";

const Login: Component = () => {
  const [t] = useI18n();

  return (
    <div>
      <button onClick={() => signIn()}>{t("login.signIn")}</button>
    </div>
  );
};

export default Login;

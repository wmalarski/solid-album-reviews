import { Form, FormLabel } from "@components/Form/Form";
import { Input } from "@components/Input/Input";
import { nhost } from "@services/nhost";
import { useI18n } from "@solid-primitives/i18n";
import { paths } from "@utils/paths";
import { Link } from "solid-app-router";
import { Component, createSignal } from "solid-js";
import * as classes from "./SignIn.css";

const SignIn: Component = () => {
  const [t] = useI18n();

  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    nhost.auth.signIn({
      email: email(),
      password: password(),
    });
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  return (
    <Form class={classes.container} onSubmit={handleSubmit}>
      <h1>{t("SignIn.header")}</h1>
      <FormLabel for="email">{t("SignIn.email")}</FormLabel>
      <Input
        id="email"
        value={email()}
        onChange={(e) => handleEmailChange(e.currentTarget.value)}
      />
      <FormLabel for="password">{t("SignIn.password")}</FormLabel>
      <Input
        id="password"
        type="password"
        value={email()}
        onChange={(e) => handlePasswordChange(e.currentTarget.value)}
      />
      <button type="submit">{t("SignIn.button")}</button>
      <Link href={paths.signUp}>{t("SignIn.signUp")}</Link>
    </Form>
  );
};

export default SignIn;

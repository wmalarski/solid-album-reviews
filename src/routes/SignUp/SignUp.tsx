import { Form, FormLabel } from "@components/Form/Form";
import { Input } from "@components/Input/Input";
import { nhost } from "@services/nhost";
import { useI18n } from "@solid-primitives/i18n";
import { paths } from "@utils/paths";
import { Link } from "solid-app-router";
import { Component, createSignal } from "solid-js";
import * as classes from "./SignUp.css";

const SignUp: Component = () => {
  const [t] = useI18n();

  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    nhost.auth.signUp({
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
      <h1>{t("SignUp.header")}</h1>
      <FormLabel for="email">{t("SignUp.email")}</FormLabel>
      <Input
        id="email"
        value={email()}
        onChange={(e) => handleEmailChange(e.currentTarget.value)}
      />
      <FormLabel for="password">{t("SignUp.password")}</FormLabel>
      <Input
        id="password"
        type="password"
        value={email()}
        onChange={(e) => handlePasswordChange(e.currentTarget.value)}
      />
      <button type="submit">{t("SignUp.button")}</button>
      <Link href={paths.signIn}>{t("SignUp.signIn")}</Link>
    </Form>
  );
};

export default SignUp;

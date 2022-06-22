import { Form, FormLabel } from "@components/Form/Form";
import { Input } from "@components/Input/Input";
import { ErrorPayload } from "@nhost/core";
import { SignUpParams } from "@nhost/hasura-auth-js";
import { useI18n } from "@solid-primitives/i18n";
import { paths } from "@utils/paths";
import { Link } from "solid-app-router";
import { Component, createSignal } from "solid-js";
import * as classes from "./SignUpForm.css";

type Props = {
  error: ErrorPayload | null;
  onSubmit: (args: SignUpParams) => void;
};

export const SignUpForm: Component<Props> = (props) => {
  const [t] = useI18n();

  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    props.onSubmit({ email: email(), password: password() });
  };

  return (
    <Form class={classes.container} onSubmit={handleSubmit}>
      <h1>{t("SignUp.header")}</h1>
      <FormLabel for="email">{t("SignUp.email")}</FormLabel>
      <Input
        id="email"
        value={email()}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <FormLabel for="password">{t("SignUp.password")}</FormLabel>
      <Input
        id="password"
        type="password"
        value={email()}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <button type="submit">{t("SignUp.button")}</button>
      {props.error && <span>{props.error.message}</span>}
      <Link href={paths.signIn}>{t("SignUp.signIn")}</Link>
    </Form>
  );
};

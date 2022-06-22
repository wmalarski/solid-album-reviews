import { Form, FormLabel } from "@components/Form/Form";
import { Input } from "@components/Input/Input";
import { ErrorPayload } from "@nhost/core";
import { useI18n } from "@solid-primitives/i18n";
import { paths } from "@utils/paths";
import { Link } from "solid-app-router";
import { Component, createSignal } from "solid-js";
import * as classes from "./SignInForm.css";

export type SignInFormArgs = {
  email: string;
  password: string;
};

type Props = {
  error: ErrorPayload | null;
  onSubmit: (args: SignInFormArgs) => void;
};

export const SignInForm: Component<Props> = (props) => {
  const [t] = useI18n();

  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    props.onSubmit({ email: email(), password: password() });
  };

  return (
    <Form class={classes.container} onSubmit={handleSubmit}>
      <h1>{t("SignIn.header")}</h1>
      <FormLabel for="email">{t("SignIn.email")}</FormLabel>
      <Input
        id="email"
        value={email()}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <FormLabel for="password">{t("SignIn.password")}</FormLabel>
      <Input
        id="password"
        type="password"
        value={password()}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <button type="submit">{t("SignIn.button")}</button>
      {props.error && <span>{props.error.message}</span>}
      <Link href={paths.signUp}>{t("SignIn.signUp")}</Link>
    </Form>
  );
};

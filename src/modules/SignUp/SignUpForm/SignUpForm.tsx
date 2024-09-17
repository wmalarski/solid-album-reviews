import type { ErrorPayload } from "@nhost/core";
import type { SignUpParams } from "@nhost/hasura-auth-js";
import { type Component, createSignal } from "solid-js";
import { Button } from "~/components/Button/Button";
import { Form, FormLabel } from "~/components/Form/Form";
import { Input } from "~/components/Input/Input";
import { StyledLink } from "~/components/StyledLink/StyledLink";
import { useI18n } from "~/contexts/I18nContext";
import { paths } from "~/utils/paths";
import * as classes from "./SignUpForm.css";

type SignUpFormProps = {
	error: ErrorPayload | null;
	onSubmit: (args: SignUpParams) => void;
};

export const SignUpForm: Component<SignUpFormProps> = (props) => {
	const { t } = useI18n();

	const [email, setEmail] = createSignal("");
	const [password, setPassword] = createSignal("");

	const handleSubmit = (event: Event) => {
		event.preventDefault();
		props.onSubmit({ email: email(), password: password() });
	};

	return (
		<Form class={classes.container} onSubmit={handleSubmit}>
			<h1 class={classes.heading}>{t("SignUp.header")}</h1>
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
			<Button type="submit">{t("SignUp.button")}</Button>
			{props.error && <span>{props.error.message}</span>}
			<StyledLink href={paths.signIn}>{t("SignUp.signIn")}</StyledLink>
		</Form>
	);
};

import type { ErrorPayload } from "@nhost/core";
import type { SignInParams } from "@nhost/hasura-auth-js";
import { type Component, createSignal } from "solid-js";
import { Button } from "~/components/button";
import { FormLabel } from "~/components/form-label";
import { Input } from "~/components/input";
import { Link } from "~/components/link";
import { useI18n } from "~/contexts/I18nContext";
import { css } from "~/styled-system/css";
import { paths } from "~/utils/paths";

type SignInFormProps = {
	error: ErrorPayload | null;
	onSubmit: (args: SignInParams) => void;
};

export const SignInForm: Component<SignInFormProps> = (props) => {
	const { t } = useI18n();

	const [email, setEmail] = createSignal("");
	const [password, setPassword] = createSignal("");

	const handleSubmit = (event: Event) => {
		event.preventDefault();
		props.onSubmit({ email: email(), password: password() });
	};

	return (
		<form class={css({ padding: "4" })} onSubmit={handleSubmit}>
			<h1 class={css({ marginTop: "0" })}>{t("SignIn.header")}</h1>
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
			<Button type="submit">{t("SignIn.button")}</Button>
			{props.error && <span>{props.error.message}</span>}
			<Link href={paths.signUp}>{t("SignIn.signUp")}</Link>
		</form>
	);
};

import type { ErrorPayload } from "@nhost/core";
import type { SignUpParams } from "@nhost/hasura-auth-js";
import { type Component, createSignal } from "solid-js";
import { Form, FormLabel } from "~/components/Form/Form";
import { Input } from "~/components/Input/Input";
import { Button } from "~/components/button";
import { Link } from "~/components/link";
import { useI18n } from "~/contexts/I18nContext";
import { css } from "~/styled-system/css";
import { paths } from "~/utils/paths";

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
		<Form class={css({ padding: "4" })} onSubmit={handleSubmit}>
			<h1 class={css({ marginTop: "0" })}>{t("SignUp.header")}</h1>
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
			<Link href={paths.signIn}>{t("SignUp.signIn")}</Link>
		</Form>
	);
};

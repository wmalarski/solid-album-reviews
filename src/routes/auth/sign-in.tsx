import type { ErrorPayload } from "@nhost/core";
import type { SignInParams } from "@nhost/hasura-auth-js";
import { createSignal } from "solid-js";
import { SignInForm } from "~/modules/auth/SignInForm/SignInForm";
import { nhost } from "~/services/nhost";

export default function SignIn() {
	const [error, setError] = createSignal<ErrorPayload | null>(null);

	const handleSubmit = async (args: SignInParams) => {
		try {
			const response = await nhost.auth.signIn(args);
			setError(response.error);
		} catch (error) {
			// eslint-disable-next-line no-console
			console.error({ error });
		}
	};

	return <SignInForm error={error()} onSubmit={handleSubmit} />;
}

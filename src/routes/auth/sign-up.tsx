import type { ErrorPayload } from "@nhost/core";
import type { SignUpParams } from "@nhost/hasura-auth-js";
import { useNavigate } from "@solidjs/router";
import { createSignal } from "solid-js";
import { SignUpForm } from "~/modules/auth/SignUp/SignUpForm/SignUpForm";
import { nhost } from "~/services/nhost";
import { paths } from "~/utils/paths";

export default function SignUp() {
	const navigate = useNavigate();

	const [error, setError] = createSignal<ErrorPayload | null>(null);

	const handleSubmit = async (args: SignUpParams) => {
		try {
			const response = await nhost.auth.signUp(args);
			setError(response.error);
			if (!response.error) {
				navigate(paths.signIn);
			}
		} catch (error) {
			// eslint-disable-next-line no-console
			console.error({ error });
		}
	};

	return <SignUpForm error={error()} onSubmit={handleSubmit} />;
}

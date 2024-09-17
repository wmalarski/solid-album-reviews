import { Header } from "@routes/Protected/Header/Header";
import { Navigate } from "solid-app-router";
import { type Component, type ParentProps, Show } from "solid-js";
import { useNhostStatus } from "~/services/nhost";
import { paths } from "~/utils/paths";

const Protected: Component<ParentProps> = (props) => {
	const status = useNhostStatus();

	return (
		<Show
			when={status() === "auth"}
			fallback={<Navigate href={paths.signIn} />}
		>
			<Header />
			{props.children}
		</Show>
	);
};

export default Protected;

import { Header } from "@routes/Protected/Header/Header";
import { Navigate, Outlet } from "solid-app-router";
import { type Component, Show } from "solid-js";
import { useNhostStatus } from "~/services/nhost";
import { paths } from "~/utils/paths";

const Protected: Component = () => {
	const status = useNhostStatus();

	return (
		<Show
			when={status() === "auth"}
			fallback={<Navigate href={paths.signIn} />}
		>
			<Header />
			<Outlet />
		</Show>
	);
};

export default Protected;

import { useNhostStatus } from "@services/nhost";
import { Navigate, Outlet } from "solid-app-router";
import { type Component, Show } from "solid-js";
import { paths } from "~/utils/paths";

const Public: Component = () => {
	const status = useNhostStatus();

	return (
		<Show when={status() === "anon"} fallback={<Navigate href={paths.root} />}>
			<Outlet />
		</Show>
	);
};

export default Public;

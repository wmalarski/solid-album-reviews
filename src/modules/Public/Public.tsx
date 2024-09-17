import { Navigate } from "solid-app-router";
import { type Component, type ParentProps, Show } from "solid-js";
import { useNhostStatus } from "~/services/nhost";
import { paths } from "~/utils/paths";

const Public: Component<ParentProps> = (props) => {
	const status = useNhostStatus();

	return (
		<Show when={status() === "anon"} fallback={<Navigate href={paths.root} />}>
			{props.children}
		</Show>
	);
};

export default Public;

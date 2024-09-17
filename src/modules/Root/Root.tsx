import { type Component, type ParentProps, Show } from "solid-js";
import { useNhostStatus } from "~/services/nhost";
import { Loading } from "./Loading/Loading";
import * as classes from "./Root.css";

const Root: Component<ParentProps> = (props) => {
	const status = useNhostStatus();

	return (
		<div class={classes.container}>
			<Show when={status() !== "loading"} fallback={<Loading />}>
				{props.children}
			</Show>
		</div>
	);
};

export default Root;

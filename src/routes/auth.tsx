import type { Component, ParentProps } from "solid-js";
import { css } from "~/styled-system/css";

const Auth: Component<ParentProps> = (props) => {
	return (
		<div
			class={css({
				alignItems: "center",
				backgroundColor: "backgroundElevated",
				display: "flex",
				justifyContent: "center",
				position: "absolute",
				height: "100vh",
				overflow: "clip",
				width: "100vw",
			})}
		>
			<div class={css({ backgroundColor: "background", padding: "8" })}>
				{props.children}
			</div>
		</div>
	);
};

export default Auth;

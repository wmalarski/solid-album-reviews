import type { Component, ParentProps } from "solid-js";
import * as classes from "./Auth.css";

const Auth: Component<ParentProps> = (props) => {
	return (
		<div class={classes.container}>
			<div class={classes.card}>{props.children}</div>
		</div>
	);
};

export default Auth;

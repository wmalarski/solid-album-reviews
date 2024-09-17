import { A, type AnchorProps } from "@solidjs/router";
import clsx from "clsx";
import type { Component } from "solid-js";
import * as classes from "./StyledLink.css";

export const StyledLink: Component<AnchorProps> = (props) => {
	return <A {...props} class={clsx(classes.container, props.class)} />;
};

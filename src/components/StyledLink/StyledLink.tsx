import clsx from "clsx";
import { Link, type LinkProps } from "solid-app-router";
import type { Component } from "solid-js";
import * as classes from "./StyledLink.css";

export const StyledLink: Component<LinkProps> = (props) => {
	return <Link {...props} class={clsx(classes.container, props.class)} />;
};

import { NavLink } from "solid-app-router";
import type { Component, JSX } from "solid-js";
import * as classes from "./HeaderLink.css";

type HeaderLinkProps = {
	href: string;
	children: JSX.Element;
};

export const HeaderLink: Component<HeaderLinkProps> = (props) => {
	return (
		<NavLink
			href={props.href}
			class={classes.base}
			activeClass={classes.active}
			inactiveClass={classes.inactive}
		>
			{props.children}
		</NavLink>
	);
};

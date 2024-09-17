import clsx from "clsx";
import type { Component, ComponentProps } from "solid-js";
import * as classes from "./Button.css";

export const Button: Component<ComponentProps<"button">> = (props) => {
	return <button {...props} class={clsx(classes.container, props.class)} />;
};

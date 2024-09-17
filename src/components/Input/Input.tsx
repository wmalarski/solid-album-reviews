import clsx from "clsx";
import type { Component, JSX } from "solid-js";
import * as classes from "./Input.css";

export const Input: Component<JSX.InputHTMLAttributes<HTMLInputElement>> = (
	props,
) => {
	return <input {...props} class={clsx(classes.input, props.class)} />;
};

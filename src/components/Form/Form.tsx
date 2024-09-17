import clsx from "clsx";
import type { Component, ComponentProps, JSX } from "solid-js";
import * as classes from "./Form.css";

export const Form: Component<ComponentProps<"form">> = (props) => {
	return <form {...props} class={clsx(classes.form, props.class)} />;
};

export const FormLabel: Component<ComponentProps<"label">> = (props) => {
	return (
		// biome-ignore lint/a11y/noLabelWithoutControl: <explanation>
		<label
			{...props}
			for={props.for}
			class={clsx(classes.label, props.class)}
		/>
	);
};

export const FormActions: Component<JSX.HTMLAttributes<HTMLDivElement>> = (
	props,
) => {
	return <div {...props} class={clsx(classes.actions, props.class)} />;
};

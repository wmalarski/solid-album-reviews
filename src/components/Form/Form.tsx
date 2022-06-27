import clsx from "clsx";
import { Component, JSX } from "solid-js";
import * as classes from "./Form.css";

export const Form: Component<JSX.FormHTMLAttributes<HTMLFormElement>> = (
  props
) => {
  return <form {...props} class={clsx(classes.form, props.class)} />;
};

export const FormLabel: Component<JSX.LabelHTMLAttributes<HTMLLabelElement>> = (
  props
) => {
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  return <label {...props} class={clsx(classes.label, props.class)} />;
};

export const FormActions: Component<JSX.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  return <div {...props} class={clsx(classes.actions, props.class)} />;
};

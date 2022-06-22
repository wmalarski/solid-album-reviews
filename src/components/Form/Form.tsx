import { Component, JSX } from "solid-js";
import * as classes from "./Form.css";

export const Form: Component<JSX.FormHTMLAttributes<HTMLFormElement>> = (
  props
) => {
  return <form {...props} class={`${props.class || ""} ${classes.form}`} />;
};

export const FormLabel: Component<JSX.LabelHTMLAttributes<HTMLLabelElement>> = (
  props
) => {
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  return <label {...props} class={`${props.class || ""} ${classes.label}`} />;
};

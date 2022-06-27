import clsx from "clsx";
import { Component, JSX } from "solid-js";
import * as classes from "./Button.css";

export const Button: Component<JSX.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return <button {...props} class={clsx(classes.container, props.class)} />;
};

import { Component, JSX } from "solid-js";
import * as classes from "./Input.css";

export const Input: Component<JSX.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  return <input {...props} class={`${props.class || ""} ${classes.input}`} />;
};

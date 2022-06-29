import clsx from "clsx";
import { Link, LinkProps } from "solid-app-router";
import { Component } from "solid-js";
import * as classes from "./StyledLink.css";

export const StyledLink: Component<LinkProps> = (props) => {
  return <Link {...props} class={clsx(classes.container, props.class)} />;
};

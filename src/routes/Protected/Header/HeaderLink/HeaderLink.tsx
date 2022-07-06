import { NavLink } from "solid-app-router";
import { Component, JSX } from "solid-js";
import * as classes from "./HeaderLink.css";

type Props = {
  href: string;
  children: JSX.Element;
};

export const HeaderLink: Component<Props> = (props) => {
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

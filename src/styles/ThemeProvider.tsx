import { portalContainerId } from "@utils/getPortalContainer";
import { Component, JSX } from "solid-js";
import { themeClass } from "./theme.css";

type Props = {
  children: JSX.Element;
};

export const ThemeProvider: Component<Props> = (props: Props) => {
  return (
    <div class={themeClass}>
      {props.children}
      <div id={portalContainerId} />
    </div>
  );
};

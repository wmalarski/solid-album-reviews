import { portalContainerId } from "@utils/getPortalContainer";
import { Component, JSX } from "solid-js";
import { getMode } from "./themeStore";

type Props = {
  children: JSX.Element;
};

export const ThemeProvider: Component<Props> = (props: Props) => {
  document.body.setAttribute("data-mode", getMode());

  return (
    <>
      {props.children}
      <div id={portalContainerId} />
    </>
  );
};

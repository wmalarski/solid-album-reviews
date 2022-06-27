import { portalContainerId } from "@utils/getPortalContainer";
import { Component, JSX } from "solid-js";

type Props = {
  children: JSX.Element;
};

export const ThemeProvider: Component<Props> = (props: Props) => {
  return (
    <>
      {props.children}
      <div id={portalContainerId} />
    </>
  );
};

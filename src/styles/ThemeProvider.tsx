import type { Component, JSX } from "solid-js";
import { portalContainerId } from "~/utils/getPortalContainer";
import { getMode } from "./themeStore";

type ThemeProviderProps = {
	children: JSX.Element;
};

export const ThemeProvider: Component<ThemeProviderProps> = (props: Props) => {
	document.body.setAttribute("data-mode", getMode());

	return (
		<>
			{props.children}
			<div id={portalContainerId} />
		</>
	);
};

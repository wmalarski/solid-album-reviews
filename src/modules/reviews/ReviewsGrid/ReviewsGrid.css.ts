import { css } from "~/styled-system/css";

export const container = css({
	alignItems: "center",
	backgroundColor: "background",
	display: "flex",
	justifyContent: "center",
	padding: "4",
});

export const grid = css({
	columnGap: "1",
	display: "grid",
	justifyItems: "center",
	rowGap: "1",
});

export const month = css({
	// backgroundColor: vars.colors.backgroundElevated,
	border: "1px solid black",
	// padding: vars.space[1],
	width: "100%",
});

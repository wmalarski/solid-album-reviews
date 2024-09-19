import { css } from "~/styled-system/css";

export const container = css({
	backgroundColor: "background",
	display: "flex",
	padding: "4",
});

export const data = css({
	display: "grid",
	padding: "4",
	// columnGap: vars.space[4],
	gridTemplateColumns: "auto 1fr",
	// rowGap: vars.space[4],
});

export const right = css({
	alignItems: "flex-start",
	display: "flex",
	flexDirection: "column",
});

export const heading = css({
	fontSize: "4",
	padding: "4",
});

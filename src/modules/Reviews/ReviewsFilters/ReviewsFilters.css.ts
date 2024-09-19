import { css } from "~/styled-system/css";

export const container = css({
	backgroundColor: "background",
	display: "flex",
	flexDirection: "column",
	padding: "4",
});

export const label = css({
	flexGrow: 1,
});

export const input = css({
	width: "full",
});

export const actions = css({
	display: "flex",
	justifyContent: "flex-end",
	paddingBottom: "4",
	paddingX: "4",
});

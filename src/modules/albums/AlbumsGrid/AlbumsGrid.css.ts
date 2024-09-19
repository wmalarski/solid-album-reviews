import { css } from "~/styled-system/css";

export const container = css({
	display: "flex",
	flexDirection: "column",
	gap: "4",
	paddingBottom: "8",
	width: "full",
});

export const grid = css({
	display: "grid",
	justifyContent: "center",
	paddingBottom: "8",
	paddingTop: "8",
	width: "full",
	gridTemplateColumns: "repeat(auto-fit, 200px)",
	margin: "0 auto",
});

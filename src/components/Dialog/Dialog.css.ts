import { css } from "~/styled-system/css";

export const container = css({
	zIndex: "100",
	alignItems: "center",
	// background: vars.colors.gray70,
	bottom: 0,
	display: "flex",
	justifyContent: "center",
	left: 0,
	position: "fixed",
	right: 0,
	top: 0,
});

export const content = css({
	backgroundColor: "background",
	padding: "8",
});

export const title = css({
	marginBottom: "4",
	marginTop: "4",
});

export const header = css({
	alignItems: "center",
	display: "flex",
	gap: "4",
	justifyContent: "space-between",
});

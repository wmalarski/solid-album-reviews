import { css } from "~/styled-system/css";

export const container = css({
	padding: "4",
});

export const data = css({
	display: "grid",
	paddingLeft: "4",
	// columnGap: vars.space[4],
	gridTemplateColumns: "auto 1fr",
	// rowGap: vars.space[4],
});

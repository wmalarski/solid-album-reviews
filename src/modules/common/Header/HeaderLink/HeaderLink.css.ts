import { css } from "~/styled-system/css";

export const base = css({
	textTransform: "uppercase",
});

export const inactive = css({
	color: {
		base: "label",
		// hover: "labelSecondary",
	},
});

export const active = css({
	color: {
		base: "labelSecondary",
		// hover: "labelTertiary",
	},
});

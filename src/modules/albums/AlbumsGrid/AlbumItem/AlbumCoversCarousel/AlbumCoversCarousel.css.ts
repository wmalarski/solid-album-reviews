import { css } from "~/styled-system/css";

export const container = css({
	display: "flex",
	minHeight: "smallCover",
	minWidth: "smallCover",
});

export const wrapper = css({
	position: "relative",
});

export const image = css({
	// color: vars.colors.label,
	transition: "width 0.2s, height 0.2s",
});

export const imageVariant = css({
	// hover: {
	// 	height: vars.space.smallCoverHover,
	// 	width: vars.space.smallCoverHover,
	// },
	// outside: {
	// 	height: vars.space.smallCover,
	// 	width: vars.space.smallCover,
	// },
});

// const button = css({
// 	// ":hover": {
// 	// 	opacity: 0.8,
// 	// },
// 	all: "unset",
// 	backgroundColor: vars.colors.backgroundElevated,
// 	cursor: "pointer",
// 	height: "100%",
// 	opacity: 0.5,
// 	position: "absolute",
// 	width: vars.space[6],
// });

export const previous = css([{ left: 0 }]);

export const next = css([{ right: 0 }]);

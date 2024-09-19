import { css } from "~/styled-system/css";

// const shift = calc.divide(
// 	calc.subtract(vars.space.smallCover, vars.space.smallCoverHover),
// 	2,
// );

export const wrapper = css({
	backgroundColor: "background",
	overflow: "hidden",
	position: "absolute",
	transition: "top 0.2s, left 0.2s",
});

// export const wrapperVariants = styleVariants({
// 	hover: {
// 		left: shift,
// 		top: shift,
// 		zIndex: 10,
// 	},
// 	no: {
// 		left: 0,
// 		top: 0,
// 	},
// });

export const container = css({
	backgroundColor: "background",
	height: "smallCover",
	position: "relative",
	width: "smallCover",
});

export const footer = css({
	backgroundColor: "background",
});

export const heading = css({
	display: "inline-block",
	maxWidth: "smallCoverHover",
	overflow: "hidden",
	paddingX: "4",
	whiteSpace: "nowrap",
	textOverflow: "ellipsis",
});

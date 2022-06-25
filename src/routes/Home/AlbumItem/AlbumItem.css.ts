import { vars } from "@styles/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

const shift = calc.divide(
  calc.subtract(vars.space.smallCover, vars.space.smallCoverHover),
  2
);

export const wrapper = style({
  overflow: "hidden",
  position: "absolute",
  transition: "top 0.2s, left 0.2s",
});

export const wrapperVariants = styleVariants({
  hover: {
    top: shift,
    left: shift,
    zIndex: 10,
  },
  no: {
    top: 0,
    left: 0,
  },
});

export const image = style({
  transition: "width 0.2s, height 0.2s",
});

export const imageVariant = styleVariants({
  hover: {
    width: vars.space.smallCoverHover,
    height: vars.space.smallCoverHover,
  },
  no: {
    width: vars.space.smallCover,
    height: vars.space.smallCover,
  },
});

export const container = style({
  position: "relative",
  width: vars.space.smallCover,
  height: vars.space.smallCover,
});

export const actions = style({
  backgroundColor: vars.color.background,
});

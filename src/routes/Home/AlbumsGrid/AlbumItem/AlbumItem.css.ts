import { sprinkles } from "@styles/sprinkles.css";
import { vars } from "@styles/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

const shift = calc.divide(
  calc.subtract(vars.space.smallCover, vars.space.smallCoverHover),
  2
);

export const wrapper = style({
  backgroundColor: "background",
  overflow: "hidden",
  position: "absolute",
  transition: "top 0.2s, left 0.2s",
});

export const wrapperVariants = styleVariants({
  hover: {
    left: shift,
    top: shift,
    zIndex: 10,
  },
  no: {
    left: 0,
    top: 0,
  },
});

export const container = style({
  backgroundColor: "background",
  height: vars.space.smallCover,
  position: "relative",
  width: vars.space.smallCover,
});

export const footer = sprinkles({
  backgroundColor: "background",
  maxWidth: "smallCoverHover",
  paddingTop: "4",
});

export const heading = style({
  overflow: "hidden",
  padding: vars.space[4],
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

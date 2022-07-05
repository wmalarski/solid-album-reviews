import { sprinkles } from "@styles/sprinkles.css";
import { vars } from "@styles/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

const shift = calc.divide(
  calc.subtract(vars.space.smallCover, vars.space.smallCoverHover),
  2
);

export const wrapper = style([
  sprinkles({
    backgroundColor: "background",
    overflow: "hidden",
    position: "absolute",
  }),
  {
    transition: "top 0.2s, left 0.2s",
  },
]);

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

export const container = sprinkles({
  backgroundColor: "background",
  height: "smallCover",
  position: "relative",
  width: "smallCover",
});

export const footer = sprinkles({
  backgroundColor: "background",
});

export const heading = style([
  sprinkles({
    display: "inline-block",
    maxWidth: "smallCoverHover",
    overflow: "hidden",
    paddingX: "4",
    whiteSpace: "nowrap",
  }),
  {
    textOverflow: "ellipsis",
  },
]);

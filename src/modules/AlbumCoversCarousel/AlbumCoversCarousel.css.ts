import { vars } from "@styles/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const container = style({
  position: "relative",
});

export const image = style({
  transition: "width 0.2s, height 0.2s",
});

export const imageVariant = styleVariants({
  hover: {
    width: vars.space.coverExpanded,
    height: vars.space.coverExpanded,
  },
  no: {
    width: vars.space.cover,
    height: vars.space.cover,
  },
});

const button = style({
  all: "unset",
  position: "absolute",
  cursor: "pointer",
  backgroundColor: vars.color.gray,
  opacity: 0.5,
  height: "100%",
  width: vars.space.lg,
  ":hover": {
    opacity: 0.8,
  },
});

export const previous = style([button, { left: 0 }]);

export const next = style([button, { right: 0 }]);

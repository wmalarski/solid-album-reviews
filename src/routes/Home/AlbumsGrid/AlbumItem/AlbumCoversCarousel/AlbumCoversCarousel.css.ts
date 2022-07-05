import { sprinkles } from "@styles/sprinkles.css";
import { vars } from "@styles/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const container = sprinkles({
  display: "flex",
  minHeight: "smallCover",
  minWidth: "smallCover",
});

export const wrapper = sprinkles({
  position: "relative",
});

export const image = style({
  transition: "width 0.2s, height 0.2s",
});

export const imageVariant = styleVariants({
  hover: {
    height: vars.space.smallCoverHover,
    width: vars.space.smallCoverHover,
  },
  outside: {
    height: vars.space.smallCover,
    width: vars.space.smallCover,
  },
});

const button = style({
  ":hover": {
    opacity: 0.8,
  },
  all: "unset",
  backgroundColor: vars.colors.backgroundElevated,
  cursor: "pointer",
  height: "100%",
  opacity: 0.5,
  position: "absolute",
  width: vars.space[6],
});

export const previous = style([button, { left: 0 }]);

export const next = style([button, { right: 0 }]);

import { vars } from "@styles/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
});

export const wrapper = style({
  position: "relative",
});

export const image = style({
  transition: "width 0.2s, height 0.2s",
});

export const imageVariant = styleVariants({
  smallHover: {
    width: vars.space.smallCoverHover,
    height: vars.space.smallCoverHover,
  },
  smallNormal: {
    width: vars.space.smallCover,
    height: vars.space.smallCover,
  },
  largeHover: {
    width: vars.space.largeCoverHover,
    height: vars.space.largeCoverHover,
  },
  largeNormal: {
    width: vars.space.largeCover,
    height: vars.space.largeCover,
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

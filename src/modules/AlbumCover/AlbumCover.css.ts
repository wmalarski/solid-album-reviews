import { vars } from "@styles/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const image = style({
  padding: vars.space[4],
});

export const imageVariant = styleVariants({
  large: {
    minHeight: vars.space.largeCover,
    minWidth: vars.space.largeCover,
  },
  small: {
    minHeight: vars.space.smallCover,
    minWidth: vars.space.smallCover,
  },
});

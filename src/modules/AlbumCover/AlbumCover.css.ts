import { sprinkles } from "@styles/sprinkles.css";
import { vars } from "@styles/theme.css";
import { styleVariants } from "@vanilla-extract/css";

export const image = sprinkles({
  padding: "4",
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

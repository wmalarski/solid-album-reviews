import { sprinkles } from "@styles/sprinkles.css";
import { style } from "@vanilla-extract/css";

export const base = style([
  sprinkles({
    textTransform: "uppercase",
  }),
  {
    textDecoration: "none",
  },
]);

export const inactive = sprinkles({
  color: {
    base: "label",
    hover: "labelSecondary",
  },
});

export const active = sprinkles({
  color: {
    base: "labelSecondary",
    hover: "labelTertiary",
  },
});

import { sprinkles } from "@styles/sprinkles.css";
import { vars } from "@styles/theme.css";
import { styleVariants } from "@vanilla-extract/css";

export const container = sprinkles({
  padding: "4",
});

export const colorVariants = styleVariants({
  level01: { backgroundColor: vars.colors.green10 },
  level02: { backgroundColor: vars.colors.green20 },
  level03: { backgroundColor: vars.colors.green30 },
  level04: { backgroundColor: vars.colors.green40 },
  level05: { backgroundColor: vars.colors.green50 },
  level06: { backgroundColor: vars.colors.green60 },
  level07: { backgroundColor: vars.colors.green70 },
  level08: { backgroundColor: vars.colors.green80 },
  level09: { backgroundColor: vars.colors.green90 },
  level10: {},
});

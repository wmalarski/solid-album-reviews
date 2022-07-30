import { vars } from "@styles/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const container = style({
  // all: "unset",
  border: "1px solid black",
  height: vars.space["6"],
  width: vars.space["6"],
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
  level10: { backgroundColor: vars.colors.backgroundElevated },
});

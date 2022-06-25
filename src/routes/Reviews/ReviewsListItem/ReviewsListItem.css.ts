import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  padding: vars.space.md,
  display: "flex",
});

export const right = style({
  display: "flex",
  flexDirection: "column",
});

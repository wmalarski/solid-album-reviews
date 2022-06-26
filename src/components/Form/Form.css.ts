import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const form = style({
  display: "flex",
  flexDirection: "column",
  padding: vars.space.lg,
});

export const label = style({
  padding: vars.space.lg,
});

import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const form = style({
  padding: vars.space.lg,
  display: "flex",
  flexDirection: "column",
});

export const label = style({
  padding: vars.space.lg,
});

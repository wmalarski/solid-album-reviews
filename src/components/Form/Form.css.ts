import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const form = style({
  display: "flex",
  flexDirection: "column",
  padding: vars.space[6],
});

export const label = style({
  padding: vars.space[6],
});

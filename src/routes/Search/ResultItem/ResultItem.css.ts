import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  padding: vars.space[4],
});

export const right = style({
  display: "flex",
  flexDirection: "column",
});

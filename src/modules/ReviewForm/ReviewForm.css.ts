import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  padding: vars.space.md,
});

export const submit = style({
  marginTop: vars.space.md,
});

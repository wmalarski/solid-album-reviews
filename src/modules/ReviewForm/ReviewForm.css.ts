import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  padding: vars.space.md,
  display: "flex",
  flexDirection: "column",
});

export const submit = style({
  marginTop: vars.space.md,
});

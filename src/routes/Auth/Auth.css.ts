import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  alignItems: "center",
  backgroundColor: vars.color.gray,
  display: "flex",
  height: "100vh",
  justifyContent: "center",
  overflow: "clip",
  position: "absolute",
  width: "100vw",
});

export const card = style({
  backgroundColor: vars.color.background,
  border: vars.border.xs,
  padding: vars.space.md,
});

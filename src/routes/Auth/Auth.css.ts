import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  position: "absolute",
  width: "100vw",
  height: "100vh",
  overflow: "clip",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: vars.color.gray,
});

export const card = style({
  backgroundColor: vars.color.background,
  padding: vars.space.md,
  border: vars.border.xs,
});

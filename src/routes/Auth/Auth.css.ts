import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  alignItems: "center",
  backgroundColor: vars.colors.backgroundElevated,
  display: "flex",
  height: "100vh",
  justifyContent: "center",
  overflow: "clip",
  position: "absolute",
  width: "100vw",
});

export const card = style({
  backgroundColor: vars.colors.backgroundElevated,
  padding: vars.space[4],
});

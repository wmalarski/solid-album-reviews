import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  position: "fixed",
  zIndex: vars.zIndex.dialog,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: vars.color.blackA5,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const content = style({
  background: vars.color.background,
  color: vars.color.black,
  padding: vars.space.xl,
});

export const title = style({
  marginTop: 0,
});

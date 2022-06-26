import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  alignItems: "center",
  background: vars.color.blackA5,
  bottom: 0,
  display: "flex",
  justifyContent: "center",
  left: 0,
  position: "fixed",
  right: 0,
  top: 0,
  zIndex: vars.zIndex.dialog,
});

export const content = style({
  background: vars.color.background,
  color: vars.color.black,
  padding: vars.space.xl,
});

export const title = style({
  marginTop: 0,
});

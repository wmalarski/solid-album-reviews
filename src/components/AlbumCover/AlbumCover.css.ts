import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const image = style({
  minHeight: vars.space.cover,
  minWidth: vars.space.cover,
  overflow: "hidden",
  width: vars.space.cover,
  height: vars.space.cover,
});

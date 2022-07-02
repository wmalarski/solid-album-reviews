import { sprinkles } from "@styles/sprinkles.css";
import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = sprinkles({
  alignItems: "center",
  backgroundColor: "background",
  display: "flex",
  flexDirection: "row",
  gap: "4",
  justifyContent: "center",
  padding: "4",
});

export const item = style({
  padding: vars.space[4],
});

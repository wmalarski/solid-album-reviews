import { sprinkles } from "@styles/sprinkles.css";
import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const form = style({
  display: "flex",
  flexDirection: "column",
  padding: vars.space[6],
  paddingTop: vars.space[3],
});

export const label = sprinkles({
  alignItems: "center",
  display: "flex",
  gap: "4",
  padding: "4",
});

export const actions = sprinkles({
  alignItems: "center",
  display: "flex",
  gap: "4",
  justifyContent: "flex-end",
  padding: "2",
});

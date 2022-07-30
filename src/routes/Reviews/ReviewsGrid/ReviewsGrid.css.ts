import { sprinkles } from "@styles/sprinkles.css";
import { style } from "@vanilla-extract/css";

export const container = sprinkles({
  alignItems: "center",
  backgroundColor: "background",
  display: "flex",
  justifyContent: "center",
});

export const grid = style({
  display: "grid",
  justifyItems: "center",
});

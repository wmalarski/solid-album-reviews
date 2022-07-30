import { sprinkles } from "@styles/sprinkles.css";
import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = sprinkles({
  alignItems: "center",
  backgroundColor: "background",
  display: "flex",
  justifyContent: "center",
  padding: "4",
});

export const grid = style({
  columnGap: "1",
  display: "grid",
  justifyItems: "center",
  rowGap: "1",
});

export const month = style({
  backgroundColor: vars.colors.backgroundElevated,
  border: "1px solid black",
  padding: vars.space[1],
  width: "100%",
});

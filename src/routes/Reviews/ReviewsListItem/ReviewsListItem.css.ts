import { sprinkles } from "@styles/sprinkles.css";
import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = sprinkles({
  backgroundColor: "background",
  display: "flex",
  padding: "4",
});

export const data = style({
  columnGap: vars.space[4],
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  padding: vars.space[4],
});

export const right = sprinkles({
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
});

export const heading = sprinkles({
  fontSize: "4",
  padding: "4",
});

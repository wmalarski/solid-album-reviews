import { sprinkles } from "@styles/sprinkles.css";
import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = sprinkles({
  padding: "4",
});

export const data = style({
  columnGap: vars.space[4],
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  paddingLeft: vars.space[4],
});

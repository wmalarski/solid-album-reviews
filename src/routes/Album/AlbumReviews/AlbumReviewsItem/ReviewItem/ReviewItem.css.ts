import { sprinkles } from "@styles/sprinkles.css";
import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = sprinkles({
  padding: "4",
});

export const data = style([
  sprinkles({
    display: "grid",
    paddingLeft: "4",
  }),
  {
    columnGap: vars.space[4],
    gridTemplateColumns: "auto 1fr",
  },
]);

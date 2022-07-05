import { sprinkles } from "@styles/sprinkles.css";
import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = sprinkles({
  backgroundColor: "background",
  display: "flex",
  padding: "4",
});

export const data = style([
  sprinkles({
    display: "grid",
    padding: "4",
  }),
  {
    columnGap: vars.space[4],
    gridTemplateColumns: "auto 1fr",
  },
]);

export const right = sprinkles({
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
});

export const heading = sprinkles({
  fontSize: "4",
  padding: "4",
});

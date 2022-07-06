import { sprinkles } from "@styles/sprinkles.css";
import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = sprinkles({
  display: "flex",
  flexDirection: "column",
  gap: "4",
  paddingBottom: "8",
  width: "full",
});

export const grid = style([
  sprinkles({
    display: "grid",
    justifyContent: "center",
    paddingBottom: "8",
    paddingTop: "8",
    width: "full",
  }),
  {
    gridTemplateColumns: `repeat(auto-fit, ${vars.space.smallCover})`,
    margin: "0 auto",
  },
]);

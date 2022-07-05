import { sprinkles } from "@styles/sprinkles.css";
import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style([
  sprinkles({
    display: "grid",
    justifyContent: "center",
    paddingBottom: "12",
    paddingTop: "8",
  }),
  {
    gridTemplateColumns: `repeat(auto-fit, ${vars.space.smallCover})`,
    margin: "0 auto",
  },
]);

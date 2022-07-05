import { sprinkles } from "@styles/sprinkles.css";
import { style } from "@vanilla-extract/css";

export const container = style([
  sprinkles({
    alignItems: "center",
    color: "label",
    display: "flex",
    justifyContent: "center",
    width: "full",
  }),
  {
    height: "100%",
  },
]);

import { sprinkles } from "@styles/sprinkles.css";
import { style } from "@vanilla-extract/css";

export const container = style([
  sprinkles({
    alignItems: "center",
    backgroundColor: "backgroundElevated",
    display: "flex",
    justifyContent: "center",
    position: "absolute",
  }),
  {
    height: "100vh",
    overflow: "clip",
    width: "100vw",
  },
]);

export const card = sprinkles({
  backgroundColor: "background",
  padding: "8",
});

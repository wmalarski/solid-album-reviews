import { sprinkles } from "@styles/sprinkles.css";
import { style } from "@vanilla-extract/css";

export const container = sprinkles({
  alignItems: "center",
  backgroundColor: "background",
  display: "flex",
  gap: "2",
  justifyContent: "space-between",
  padding: "6",
});

export const navigation = sprinkles({
  alignItems: "center",
  display: "flex",
  gap: "4",
});

export const logo = style([
  {
    textDecoration: "none",
  },
  sprinkles({
    color: "label",
    fontSize: "4",
    textTransform: "uppercase",
  }),
]);

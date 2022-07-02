import { sprinkles } from "@styles/sprinkles.css";

export const container = sprinkles({
  alignItems: "center",
  backgroundColor: "background",
  display: "flex",
  flexDirection: "row",
  padding: "4",
});

export const label = sprinkles({
  flexGrow: 1,
});

export const input = sprinkles({
  width: "full",
});

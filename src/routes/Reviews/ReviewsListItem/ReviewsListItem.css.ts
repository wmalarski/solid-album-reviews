import { sprinkles } from "@styles/sprinkles.css";

export const container = sprinkles({
  backgroundColor: "background",
  display: "flex",
  padding: "4",
});

export const data = sprinkles({
  display: "flex",
  flexDirection: "column",
  gap: "4",
  padding: "4",
});

export const right = sprinkles({
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
});

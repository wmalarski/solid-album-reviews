import { sprinkles } from "@styles/sprinkles.css";

export const form = sprinkles({
  display: "flex",
  flexDirection: "column",
  gap: "4",
  padding: "6",
  paddingTop: "4",
});

export const label = sprinkles({
  alignItems: "center",
  display: "flex",
  gap: "4",
  padding: "2",
});

export const actions = sprinkles({
  alignItems: "center",
  display: "flex",
  gap: "4",
  justifyContent: "flex-end",
  padding: "2",
});

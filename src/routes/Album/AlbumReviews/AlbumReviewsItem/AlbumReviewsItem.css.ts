import { sprinkles } from "@styles/sprinkles.css";

export const container = sprinkles({
  backgroundColor: "background",
  display: "flex",
  padding: "4",
});

export const right = sprinkles({
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
});

export const heading = sprinkles({
  fontSize: "4",
  padding: "4",
});

export const subheading = sprinkles({
  fontSize: "3",
  paddingLeft: "4",
});

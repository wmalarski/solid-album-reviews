import { sprinkles } from "@styles/sprinkles.css";
import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style([
  sprinkles({
    zIndex: "100",
  }),
  {
    alignItems: "center",
    background: vars.colors.gray70,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    left: 0,
    position: "fixed",
    right: 0,
    top: 0,
  },
]);

export const content = sprinkles({
  backgroundColor: "background",
  padding: "8",
});

export const title = sprinkles({
  marginBottom: "4",
  marginTop: "4",
});

export const header = sprinkles({
  alignItems: "center",
  display: "flex",
  gap: "4",
  justifyContent: "space-between",
});

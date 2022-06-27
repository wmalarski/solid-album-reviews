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

export const content = style({
  background: vars.colors.background,
  color: vars.colors.black100,
  padding: vars.space[8],
});

export const title = style({
  marginBottom: vars.space[4],
  marginTop: vars.space[4],
});

export const header = sprinkles({
  alignItems: "center",
  display: "flex",
  gap: "4",
  justifyContent: "space-between",
});

import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  ":focus": {
    outline: `${vars.borderWidths[1]} solid ${vars.colors.labelSecondary}`,
  },
  ":hover": {
    backgroundColor: vars.colors.secondBlue,
  },
  all: "unset",
  backgroundColor: vars.colors.lightBlue,
  cursor: "pointer",
  padding: vars.space[4],
  textAlign: "center",
});

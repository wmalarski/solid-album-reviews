/* eslint-disable sort-keys-fix/sort-keys-fix */
import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  all: "unset",
  backgroundColor: vars.colors.lightBlue,
  color: vars.colors.label,
  cursor: "pointer",
  padding: vars.space[4],
  textAlign: "center",
  ":focus": {
    outline: `${vars.borderWidths[1]} solid ${vars.colors.labelSecondary}`,
  },
  ":hover": {
    backgroundColor: vars.colors.secondBlue,
  },
  ":disabled": {
    backgroundColor: vars.colors.fill,
    color: vars.colors.labelQuaternary,
    cursor: "not-allowed",
  },
});

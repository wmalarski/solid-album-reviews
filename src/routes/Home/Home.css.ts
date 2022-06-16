import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fit, ${vars.space.cover})`,
  justifyContent: "center",
  margin: "0 auto",
});

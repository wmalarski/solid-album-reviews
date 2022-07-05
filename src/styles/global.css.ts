import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("html, body", {
  MozOsxFontSmoothing: "grayscale",
  WebkitFontSmoothing: "antialiased",
  boxSizing: "border-box",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  margin: 0,
  padding: 0,
});

globalStyle("body", {
  backgroundColor: vars.colors.backgroundElevated,
  color: vars.colors.label,
});

globalStyle("code", {
  fontFamily:
    "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
});

globalStyle("*, ::before, ::after", {
  boxSizing: "border-box",
});

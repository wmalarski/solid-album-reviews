import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
});

globalStyle("code", {
  fontFamily:
    "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
});

globalStyle("*, *::before, *::after", {
  boxSizing: "inherit",
});

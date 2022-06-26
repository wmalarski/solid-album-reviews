import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  MozOsxFontSmoothing: "grayscale",
  WebkitFontSmoothing: "antialiased",
  boxSizing: "border-box",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  margin: 0,
  padding: 0,
});

globalStyle("code", {
  fontFamily:
    "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
});

globalStyle("*, *::before, *::after", {
  boxSizing: "inherit",
});

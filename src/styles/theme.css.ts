import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    background: "#ffffff",
    gray: "#f0f1f2",
    blackA5: "rgba(0, 0, 0, 0.5)",
    black: "#000",
  },
  space: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    smallCover: "250px",
    smallCoverHover: "300px",
    largeCover: "500px",
    largeCoverHover: "550px",
  },
  border: {
    xs: "solid 1px #f0f1f2",
  },
  zIndex: {
    dialog: "100",
  },
});

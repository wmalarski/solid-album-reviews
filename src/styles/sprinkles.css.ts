/* eslint-disable sort-keys-fix/sort-keys-fix */
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { breakpoints } from "./breakpoints";
import { vars } from "./theme.css";

const flexAlignment = ["flex-start", "center", "flex-end", "stretch"] as const;

const flexibility = [0, 1, 2, 3, 4] as const;

const extendedSpace = {
  ...vars.space,
  "1/4": "25%",
  "1/3": "33.333333%",
  "1/2": "50%",
  "2/3": "66.666667%",
  "3/4": "75%",
  full: "100%",
  auto: "auto",
  screenSm: breakpoints.sm,
  screenMd: breakpoints.md,
  screenLg: breakpoints.lg,
  screenXl: breakpoints.xl,
};

const margin = { ...vars.space, auto: "auto" };

const responsiveProperties = defineProperties({
  defaultCondition: "xs",
  conditions: {
    xs: {},
    sm: { "@media": `(min-width: ${breakpoints.sm}px)` },
    md: { "@media": `(min-width: ${breakpoints.md}px)` },
    lg: { "@media": `(min-width: ${breakpoints.lg}px)` },
    xl: { "@media": `(min-width: ${breakpoints.xl}px)` },
  },
  properties: {
    alignItems: [...flexAlignment, "baseline"],
    alignSelf: [...flexAlignment, "baseline"],
    borderWidth: vars.borderWidths,
    borderBottomWidth: vars.borderWidths,
    borderLeftWidth: vars.borderWidths,
    borderRightWidth: vars.borderWidths,
    borderTopWidth: vars.borderWidths,
    borderRadius: vars.radii,
    borderBottomLeftRadius: vars.radii,
    borderBottomRightRadius: vars.radii,
    borderTopLeftRadius: vars.radii,
    borderTopRightRadius: vars.radii,
    bottom: vars.space,
    display: [
      "block",
      "flex",
      "grid",
      "inline",
      "inline-flex",
      "inline-block",
      "none",
      "contents",
    ],
    flex: { 1: "1 1 0%", auto: "1 1 auto", initial: "0 1 auto", none: "none" },
    flexBasis: extendedSpace,
    flexDirection: ["column", "row"],
    flexGrow: flexibility,
    flexShrink: flexibility,
    flexWrap: ["wrap", "nowrap"],
    fontSize: { ...vars.fontSizes, inherit: "inherit" },
    gap: vars.space,
    height: vars.space,
    inset: vars.space,
    justifyContent: [...flexAlignment, "space-around", "space-between"],
    justifySelf: flexAlignment,
    left: vars.space,
    marginBottom: margin,
    marginLeft: margin,
    marginRight: margin,
    marginTop: margin,
    maxHeight: vars.space,
    maxWidth: { ...extendedSpace, none: "none" },
    minHeight: vars.space,
    minWidth: vars.space,
    overflow: ["auto", "hidden", "scroll", "unset"],
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    paddingTop: vars.space,
    position: ["absolute", "fixed", "relative", "sticky"],
    right: vars.space,
    textAlign: ["center", "left", "right"],
    top: vars.space,
    width: extendedSpace,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    placeItems: ["justifyContent", "alignItems"],
  },
});

const unresponsiveProperties = defineProperties({
  properties: {
    aspectRatio: {
      auto: "auto",
      "1/1": "1 / 1",
      "2/1": "2 / 1",
      "4/1": "4 / 1",
      "4/3": "4 / 3",
      "16/9": "16 / 9",
    },
    cursor: ["default", "pointer", "not-allowed"],
    fontFamily: vars.fonts,
    isolation: ["isolate"],
    objectFit: ["contain", "cover"],
    pointerEvents: ["none"],
    scrollMarginTop: vars.space,
    textTransform: ["capitalize", "lowercase", "uppercase"],
    transitionProperty: {
      none: "none",
      all: "all",
      default:
        "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
      colors: "background-color, border-color, color, fill, stroke",
      opacity: "opacity",
      shadow: "box-shadow",
      transform: "transform",
    },
    transitionTimingFunction: {
      linear: "linear",
      ease: "ease",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      inOut: "cubic-bezier(0.42, 0, 0.58, 1)",
    },
    visibility: ["hidden", "visible"],
    whiteSpace: [
      "normal",
      "nowrap",
      "pre",
      "pre-line",
      "pre-wrap",
      "initial",
      "inherit",
    ],
    wordBreak: ["break-word"],
    wordWrap: ["normal", "break-word", "initial", "inherit"],
    zIndex: {
      "0": 0,
      "10": 10,
      "20": 20,
      "30": 30,
      "40": 40,
      "50": 50,
      "75": 75,
      "100": 100,
      auto: "auto",
    },
  },
});

const colorProperties = defineProperties({
  conditions: {
    base: {},
    active: { selector: "&:active" },
    focus: { selector: "&:focus" },
    hover: { selector: "&:hover" },
  },
  defaultCondition: "base",
  properties: {
    backgroundColor: vars.colors,
    borderColor: vars.colors,
    color: vars.colors,
    outlineColor: vars.colors,
  },
});

const motionSafeProperties = defineProperties({
  conditions: {
    base: { "@media": "(prefers-reduced-motion: no-preference)" },
  },
  defaultCondition: "base",
  properties: {
    transitionDuration: {
      "75": "75ms",
      "100": "100ms",
      "150": "150ms",
      "200": "200ms",
      "300": "300ms",
      "500": "500ms",
      "700": "700ms",
      "1000": "1000ms",
    },
  },
});

const interactionProperties = defineProperties({
  conditions: {
    base: {},
    hover: { selector: "&:hover" },
    focus: { selector: "&:focus" },
    active: { selector: "&:active" },
  },
  defaultCondition: "base",
  properties: {
    transform: {
      grow: "scale(1.04)",
      shrink: "scale(0.95)",
    },
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  unresponsiveProperties,
  colorProperties,
  motionSafeProperties,
  interactionProperties
);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];

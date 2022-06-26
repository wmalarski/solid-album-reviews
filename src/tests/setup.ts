import { vi } from "vitest";

vi.mock("@vanilla-extract/css", () => {
  return {
    createTheme: <T>(theme: T) => ["class", theme],
    globalStyle: () => void 0,
    style: (): string => "class",
    styleVariants: <T>(variants: T) =>
      Object.fromEntries(Object.keys(variants).map((key) => [key, "class"])),
  };
});

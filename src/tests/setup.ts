import { vi } from "vitest";

vi.mock("@vanilla-extract/css", () => {
  return {
    style: (): string => "class",
    globalStyle: () => void 0,
    createTheme: <T>(theme: T) => ["class", theme],
    styleVariants: <T>(variants: T) =>
      Object.fromEntries(Object.keys(variants).map((key) => [key, "class"])),
  };
});

/// <reference types="vitest" />
/// <reference types="vite/client" />

import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [solidPlugin(), tsconfigPaths({}), vanillaExtractPlugin()],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
  resolve: {
    conditions: ["development", "browser"],
  },
  test: {
    environment: "jsdom",
    transformMode: {
      web: [/.[jt]sx?/],
    },
    deps: {
      inline: [/solid-js/],
    },
    threads: false,
    isolate: false,
    setupFiles: "./src/tests/setup.ts",
  },
});

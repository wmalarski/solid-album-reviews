import { I18nContext } from "@solid-primitives/i18n";
import { ThemeProvider } from "@styles/ThemeProvider";
import { i18next } from "@utils/i18next";
import { Router } from "solid-app-router";
import { JSX } from "solid-js";

export type TestWrapperProps = {
  children?: JSX.Element;
};

export type PropsWithTestWrapper<T = unknown> = Partial<T> & {
  wrapperProps?: Omit<TestWrapperProps, "children">;
};

export const TestWrapper = (props: TestWrapperProps): JSX.Element => {
  return (
    <I18nContext.Provider value={i18next}>
      <Router>
        <ThemeProvider>{props.children}</ThemeProvider>
      </Router>
    </I18nContext.Provider>
  );
};

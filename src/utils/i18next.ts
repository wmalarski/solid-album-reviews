import { createI18nContext } from "@solid-primitives/i18n";

const dict = {
  en: {
    header: {
      title: "Album Reviews",
      signOut: "Sign Out",
    },
    login: {
      signIn: "Sign In",
    },
    error: {
      notFound: "Not Found",
    },
    loading: {
      text: "Loading...",
    },
    home: {},
  },
};

export const i18next = createI18nContext(dict, "en");

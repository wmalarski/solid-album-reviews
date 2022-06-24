import { createI18nContext } from "@solid-primitives/i18n";

const dict = {
  en: {
    header: {
      title: "Album Reviews",
      search: "Search",
      signOut: "Sign Out",
    },
    SignUp: {
      header: "Sign Up",
      email: "Email",
      password: "Password",
      button: "Sign Up",
      signIn: "Sign In",
    },
    SignIn: {
      header: "Sign In",
      email: "Email",
      password: "Password",
      button: "Sign In",
      signUp: "Sign Up",
    },
    error: {
      notFound: "Not Found",
    },
    loading: {
      text: "Loading...",
    },
    Pagination: {
      previous: "Previous",
      next: "Next",
    },
    home: {},
  },
};

export const i18next = createI18nContext(dict, "en");

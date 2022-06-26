import { createI18nContext } from "@solid-primitives/i18n";

const dict = {
  en: {
    DeleteAlbumDialog: {
      title: "Delete album",
      trigger: "Delete",
    },
    DeleteAlbumForm: {
      cancel: "Cancel",
      remove: "Remove",
    },
    DeleteReviewDialog: {
      title: "Delete album",
      trigger: "Delete",
    },
    DeleteReviewForm: {
      cancel: "Cancel",
      remove: "Remove",
    },
    GoogleRedirectButton: {
      text: "Google",
    },
    InsertReviewDialog: {
      title: "Review album",
      trigger: "Review",
    },
    Pagination: {
      next: "Next",
      previous: "Previous",
    },
    ReviewForm: {
      rateLabel: "Rate",
      submit: "Submit",
      textLabel: "Text",
    },
    SignIn: {
      button: "Sign In",
      email: "Email",
      header: "Sign In",
      password: "Password",
      signUp: "Sign Up",
    },
    SignUp: {
      button: "Sign Up",
      email: "Email",
      header: "Sign Up",
      password: "Password",
      signIn: "Sign In",
    },
    UpdateAlbumDialog: {
      title: "Update album",
      trigger: "Update",
    },
    UpdateAlbumForm: {
      submit: "Submit",
      titleLabel: "Title",
      yearLabel: "Year",
    },
    UpdateReviewDialog: {
      title: "Update review",
      trigger: "Update",
    },
    YtRedirectButton: {
      text: "YouTube",
    },
    error: {
      notFound: "Not Found",
    },
    header: {
      reviews: "Reviews",
      search: "Search",
      signOut: "Sign Out",
      title: "Album Reviews",
    },
    home: {},
    loading: {
      text: "Loading...",
    },
  },
};

export const i18next = createI18nContext(dict, "en");

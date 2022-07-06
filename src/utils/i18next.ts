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
      title: "Delete review",
      trigger: "Delete review",
    },
    DeleteReviewForm: {
      cancel: "Cancel",
      remove: "Remove",
    },
    Dialog: {
      close: "Close",
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
      of: "{{current}} of {{max}}",
      previous: "Previous",
    },
    ReviewForm: {
      rateLabel: "Rate",
      submit: "Submit",
      textLabel: "Text",
    },
    ReviewItem: {
      date: "Date",
      rate: "Rate",
      reviews: "Reviews",
      text: "Text",
    },
    ReviewsFilters: {
      button: "Search",
      lower: "Lower",
      search: "Search",
      upper: "Upper",
    },
    SearchInput: {
      button: "Search",
      label: "Search",
      placeholder: "Search",
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
      trigger: "Update review",
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
    home: {
      refetch: "Reload",
    },
    loading: {
      text: "Loading...",
    },
  },
};

export const i18next = createI18nContext(dict, "en");

export const paths = {
  root: "/",
  signIn: "/auth",
  signUp: "/auth/signUp",
  search: "/search",
  album: (id: number): string => `/album/${id}`,
  notFound: "/404",
};

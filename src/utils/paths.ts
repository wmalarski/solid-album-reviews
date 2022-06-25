export const paths = {
  root: "/",
  signIn: "/auth",
  signUp: "/auth/signUp",
  search: "/search",
  reviews: "/reviews",
  album: (id: number): string => `/album/${id}`,
  notFound: "/404",
};

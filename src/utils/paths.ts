export const paths = {
  root: "/",
  signIn: "/auth",
  signUp: "/auth/signUp",
  album: (id: number): string => `/album/${id}`,
  notFound: "/404",
};

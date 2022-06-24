export const paths = {
  root: "/",
  signIn: "/auth",
  signUp: "/auth/signUp",
  search: (page = 0, query = ""): string =>
    `/search?${new URLSearchParams({ page: String(page), query })}`,
  album: (id: number): string => `/album/${id}`,
  notFound: "/404",
};

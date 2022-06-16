import createAuth0Client, { Auth0Client } from "@auth0/auth0-spa-js";

export const getAuth0Client = (): Auth0Client => {
  return new Auth0Client({
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
    redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
    scope: import.meta.env.VITE_AUTH0_SCOPE,
    useRefreshTokens: true,
  });
};

export const getAuth0ClientAsync = (): Promise<Auth0Client> => {
  return createAuth0Client({
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
    redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
    scope: import.meta.env.VITE_AUTH0_SCOPE,
    useRefreshTokens: true,
  });
};

export const auth0Client = new Auth0Client({
  domain: import.meta.env.VITE_AUTH0_DOMAIN,
  client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
  redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
  scope: import.meta.env.VITE_AUTH0_SCOPE,
  useRefreshTokens: true,
});

// export type GetSessionReturn = {
//   accessToken: string;
//   user: User;
// };

// export const getSession = async (): Promise<GetSessionReturn> => {
//   const accessToken = await auth0Client.getTokenSilently();
//   const user = await auth0Client.getUser();
//   if (!user) {
//     throw new Error("User not defined");
//   }
//   return { accessToken, user };
// };

// export const getToken = (): Promise<string> => {
//   return auth0Client.getTokenSilently();
// };

// export const loginWithRedirect = (): Promise<void> => {
//   return auth0Client.loginWithRedirect();
// };

// export const logout = (): void | Promise<void> => {
//   return auth0Client.logout();
// };

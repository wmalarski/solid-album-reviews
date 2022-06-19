import { createResource } from "solid-js";

type SessionContextState =
  | {
      status: "loading";
    }
  | {
      status: "auth";
      accessToken: string;
    }
  | {
      status: "anon";
    };

const loadSession = (): Promise<SessionContextState> => {
  // try {
  //   // await auth0Client.checkSession();
  //   const isAuthenticated = await auth0Client.isAuthenticated();
  //   console.log({ isAuthenticated });
  //   return isAuthenticated
  //     ? { status: "auth", accessToken: "123" }
  //     : { status: "anon" };
  // } catch (err) {
  //   console.log({ err });
  //   return { status: "anon" };
  // }
  const accessToken = localStorage.getItem("accessToken");
  return Promise.resolve(
    accessToken ? { status: "auth", accessToken } : { status: "anon" }
  );
};

export const [session, { mutate }] = createResource<SessionContextState>(
  loadSession,
  {
    initialValue: { status: "loading" },
  }
);

export const signIn = (): Promise<void> => {
  const accessToken = "accessToken";
  localStorage.setItem("accessToken", accessToken);
  mutate({ status: "auth", accessToken });
  // await auth0Client.loginWithRedirect();
  return Promise.resolve();
};

export const signOut = (): Promise<void> => {
  localStorage.removeItem("accessToken");
  // await auth0Client.logout();
  mutate({ status: "anon" });
  return Promise.resolve();
};

export const handleRedirectCallback = (): Promise<void> => {
  // await auth0Client.handleRedirectCallback();
  // const user = await auth0Client.getUser();
  const accessToken = "accessToken";
  localStorage.setItem("accessToken", accessToken);
  // const accessToken = await auth0Client.getTokenSilently();
  mutate({ status: "auth", accessToken });
  return Promise.resolve();
};

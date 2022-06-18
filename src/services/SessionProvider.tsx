import { createResource } from "solid-js";

type SessionContextState =
  | {
      status: "loading";
    }
  | {
      status: "auth";
      accessToken: string;
      refreshToken: string;
    }
  | {
      status: "anon";
    };

export const [session, { mutate }] = createResource<SessionContextState>(
  () => {
    const accessToken = localStorage.getItem("accessToken");
    return Promise.resolve(
      accessToken
        ? { status: "auth", accessToken, refreshToken: "" }
        : { status: "anon" }
    );
  },
  {
    initialValue: { status: "loading" },
  }
);

export const signIn = (): Promise<void> => {
  const accessToken = "accessToken";
  localStorage.setItem("accessToken", accessToken);
  mutate({ status: "auth", accessToken, refreshToken: "" });
  return Promise.resolve();
};

export const signOut = (): Promise<void> => {
  localStorage.removeItem("accessToken");
  mutate({ status: "anon" });
  return Promise.resolve();
};

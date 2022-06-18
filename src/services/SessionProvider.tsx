import {
  Component,
  createContext,
  createMemo,
  createResource,
  createSignal,
  JSX,
  useContext,
} from "solid-js";

export type AuthService = {
  signOut: () => Promise<void>;
};

export type AnonService = {
  signIn: () => Promise<void>;
};

type SessionContextValue =
  | {
      status: "loading";
    }
  | {
      status: "anon";
      value: AnonService;
    }
  | {
      status: "auth";
      value: AuthService;
    };

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

export const SessionContext = createContext<SessionContextValue>({
  status: "loading",
});

export const useAuthService = (): AuthService => {
  const context = useContext(SessionContext);

  if (context.status !== "auth") {
    throw new Error("AuthService not defined");
  }

  return context.value;
};

export const useAnonService = (): AnonService => {
  const context = useContext(SessionContext);

  if (context.status !== "anon") {
    throw new Error("AnonService not defined");
  }

  return context.value;
};

export const useSessionStatus = (): SessionContextValue["status"] => {
  const context = useContext(SessionContext);

  return context.status;
};

type Props = {
  children: JSX.Element;
};

export const [session, { mutate, refetch }] =
  createResource<SessionContextState>(
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

export const SessionProvider: Component<Props> = (props: Props) => {
  const [state, setState] = createSignal<SessionContextState>({
    status: "loading",
  });
  // const [client] = createResource(async () => {
  //   const client = await getAuth0ClientAsync();
  //   console.log({ client });
  //   return client;
  // });

  // console.log({ client });

  // createEffect(() => {
  //   const data = client();
  //   console.log("data", data);
  // });

  const value = createMemo<SessionContextValue>(() => {
    const currentState = state();
    switch (currentState.status) {
      case "loading":
        return { status: "loading" };
      case "anon":
        return {
          status: "anon",
          value: {
            signIn: () => {
              const accessToken = "accessToken";
              localStorage.setItem("accessToken", accessToken);
              setState({ status: "auth", accessToken, refreshToken: "" });
              return Promise.resolve();
            },
          },
        };
      case "auth":
        return {
          status: "auth",
          value: {
            signOut: () => {
              localStorage.removeItem("accessToken");
              setState({ status: "anon" });
              return Promise.resolve();
            },
          },
        };
    }
  });

  return (
    <SessionContext.Provider value={value()}>
      {props.children}
    </SessionContext.Provider>
  );
};

import { Session } from "@nhost/hasura-auth-js";
import { NhostClient } from "@nhost/nhost-js";
import {
  Component,
  createContext,
  createSignal,
  JSX,
  onCleanup,
  useContext,
} from "solid-js";

export const nhost = new NhostClient({
  backendUrl: import.meta.env.VITE_NHOST_BACKEND_URL || "",
});

type NhostSessionState =
  | {
      status: "auth";
      session: Session;
    }
  | {
      status: "anon";
    }
  | {
      status: "loading";
    };

type NhostSessionAccessor = () => NhostSessionState;

type Props = {
  children: JSX.Element;
};

const NhostSessionContext = createContext<NhostSessionAccessor>(() => ({
  status: "loading",
}));

export const NhostProvider: Component<Props> = (props) => {
  const [nhostSession, setNhostSession] = createSignal<NhostSessionState>({
    status: "loading",
  });

  const unsubscribe = nhost.auth.onAuthStateChanged((_event, session) => {
    setNhostSession(session ? { session, status: "auth" } : { status: "anon" });
  });

  onCleanup(() => {
    unsubscribe();
  });

  return (
    <NhostSessionContext.Provider value={nhostSession}>
      {props.children}
    </NhostSessionContext.Provider>
  );
};

export const useNhostStatus = (): (() => NhostSessionState["status"]) => {
  return () => useContext(NhostSessionContext)().status;
};

export const useNhostSession = (): (() => Session) => {
  return () => {
    const context = useContext(NhostSessionContext);
    const state = context();

    if (state.status !== "auth") {
      throw new Error("Session is not defined");
    }

    return state.session;
  };
};

import { Session } from "@nhost/hasura-auth-js";
import { NhostClient } from "@nhost/nhost-js";
import { createSignal } from "solid-js";

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

export const [nhostSession, setNhostSession] = createSignal<NhostSessionState>({
  status: "loading",
});

nhost.auth.onAuthStateChanged((_event, session) => {
  setNhostSession(session ? { session, status: "auth" } : { status: "anon" });
});

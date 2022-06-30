import { graphqlSdk } from "@services/fetcher";
import { NhostResponse } from "@services/nhost";
import { RandomAlbumsQuery } from "@services/types";
import {
  Component,
  createContext,
  createResource,
  JSX,
  useContext,
} from "solid-js";

type HomeResourceContextValue = {
  albums: () => NhostResponse<RandomAlbumsQuery> | undefined;
  refetch: () => void;
};

const HomeResourceContext = createContext<HomeResourceContextValue>({
  albums: () => void 0,
  refetch: () => void 0,
});

const loader = () => {
  return graphqlSdk.RandomAlbums({
    limit: 20,
  });
};

type Props = {
  children: JSX.Element;
};

export const HomeResourceProvider: Component<Props> = (props) => {
  const [albums, { refetch }] = createResource(loader);

  return (
    <HomeResourceContext.Provider value={{ albums, refetch }}>
      {props.children}
    </HomeResourceContext.Provider>
  );
};

export const useHomeResource = (): HomeResourceContextValue => {
  return useContext(HomeResourceContext);
};

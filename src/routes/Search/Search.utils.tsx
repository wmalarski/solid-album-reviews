import { graphqlSdk } from "@services/fetcher";
import { NhostResponse } from "@services/nhost";
import { SelectAlbumsWithArtistQuery } from "@services/types";
import {
  Component,
  createContext,
  createResource,
  JSX,
  useContext,
} from "solid-js";

type SearchResourceContextValue = {
  albums: () => NhostResponse<SelectAlbumsWithArtistQuery> | undefined;
  maxPage: () => number;
  refetch: () => void;
};

const SearchResourceContext = createContext<SearchResourceContextValue>({
  albums: () => void 0,
  maxPage: () => 0,
  refetch: () => void 0,
});

const pageLimit = 10;

type LoaderArgs = {
  page: number;
  query: string;
};

const loader = ({ page, query }: LoaderArgs) => {
  const pattern = `%${query}%`;
  return graphqlSdk.SelectAlbumsWithArtist({
    limit: pageLimit,
    offset: page * pageLimit,
    where: {
      _or: [
        { title: { _ilike: pattern } },
        { artistByArtist: { name: { _ilike: pattern } } },
      ],
    },
  });
};

type Props = {
  children: JSX.Element;
  page: number;
  query: string;
};

export const SearchResourceProvider: Component<Props> = (props) => {
  const [albums, { refetch }] = createResource(
    () => ({ page: props.page, query: props.query }),
    loader
  );

  const maxPage = () => {
    const count = albums()?.data?.albumAggregate.aggregate?.count || 0;
    return Math.ceil(count / pageLimit);
  };

  return (
    <SearchResourceContext.Provider value={{ albums, maxPage, refetch }}>
      {props.children}
    </SearchResourceContext.Provider>
  );
};

export const useSearchResource = (): SearchResourceContextValue => {
  return useContext(SearchResourceContext);
};

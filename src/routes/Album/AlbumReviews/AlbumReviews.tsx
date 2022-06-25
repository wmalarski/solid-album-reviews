import { graphqlSdk } from "@services/fetcher";
import { Component, createResource, createSignal } from "solid-js";
import * as classes from "./AlbumReviews.css";

type LoaderArgs = {
  page: number;
  albumId: number;
};

const pageLimit = 20;

const loader = ({ page, albumId }: LoaderArgs) => {
  return graphqlSdk.SelectReviewsWithAlbum({
    offset: page * pageLimit,
    limit: pageLimit,
    where: {
      albumByAlbum: {
        artistByArtist: {
          albums: {
            id: {
              _eq: albumId,
            },
          },
        },
      },
    },
  });
};

type Props = {
  albumId: number;
};

export const AlbumReviews: Component<Props> = (props) => {
  const [page, setPage] = createSignal(0);

  const [selectReviews] = createResource(
    () => ({ page: page(), albumId: props.albumId }),
    loader
  );

  return (
    <span class={classes.container}>
      <pre>{JSON.stringify(selectReviews(), null, 2)}</pre>
    </span>
  );
};

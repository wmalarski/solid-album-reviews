import { Pagination } from "@components/Pagination/Pagination";
import { InsertReviewDialog } from "@modules/InsertReviewDialog/InsertReviewDialog";
import { graphqlSdk } from "@services/fetcher";
import { Component, createResource, createSignal, For } from "solid-js";
import * as classes from "./AlbumReviews.css";
import { AlbumReviewsItem } from "./AlbumReviewsItem/AlbumReviewsItem";

type LoaderArgs = {
  page: number;
  albumId: number;
};

const pageLimit = 20;

const loader = ({ page, albumId }: LoaderArgs) => {
  return graphqlSdk.SelectAlbumsWithReviews({
    offset: page * pageLimit,
    limit: pageLimit,
    where: {
      artistByArtist: {
        albums: {
          id: {
            _eq: albumId,
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

  const [selectReviews, { refetch }] = createResource(
    () => ({ page: page(), albumId: props.albumId }),
    loader
  );

  const maxPage = () => {
    const count = selectReviews()?.data?.albumAggregate.aggregate?.count || 0;
    return Math.ceil(count / pageLimit);
  };

  const handleAlbumChange = () => {
    refetch();
  };

  return (
    <div class={classes.container}>
      <InsertReviewDialog
        albumId={props.albumId}
        onSuccess={handleAlbumChange}
      />
      <For each={selectReviews()?.data?.album}>
        {(album) => (
          <AlbumReviewsItem album={album} onAlbumChange={handleAlbumChange} />
        )}
      </For>
      <Pagination current={page()} maxPage={maxPage()} onChange={setPage} />
    </div>
  );
};

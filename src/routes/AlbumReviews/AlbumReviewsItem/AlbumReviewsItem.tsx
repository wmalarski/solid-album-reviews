import { StyledLink } from "@components/StyledLink/StyledLink";
import { AlbumActions } from "@modules/AlbumActions/AlbumActions";
import { AlbumCover } from "@modules/AlbumCover/AlbumCover";
import {
  AlbumWithArtistFragment,
  AlbumWithReviewsFragment,
} from "@services/types";
import { useI18n } from "@solid-primitives/i18n";
import { formatAlbum } from "@utils/formatters";
import { paths } from "@utils/paths";
import { useNavigate, useRouteData } from "solid-app-router";
import { Component, For, Show } from "solid-js";
import { AlbumReviewDataLoaderResult } from "../AlbumReviews.data";
import * as classes from "./AlbumReviewsItem.css";
import { ReviewItem } from "./ReviewItem/ReviewItem";

type Props = {
  isCurrent: boolean;
  album: AlbumWithReviewsFragment & AlbumWithArtistFragment;
};

export const AlbumReviewsItem: Component<Props> = (props) => {
  const [t] = useI18n();

  const navigate = useNavigate();
  const { refetchAlbums, refetchAlbum } =
    useRouteData<AlbumReviewDataLoaderResult>();

  const handleAlbumDelete = () => {
    if (props.isCurrent) {
      navigate(paths.root);
      return;
    }
    refetchAlbums();
  };

  const handleAlbumUpdate = () => {
    if (props.isCurrent) {
      refetchAlbum();
    }
    refetchAlbums();
  };

  const handleReviewChange = () => {
    refetchAlbums();
  };

  return (
    <div class={classes.container}>
      <AlbumCover
        label={formatAlbum(props.album)}
        sid={props.album.sid}
        kind="small"
      />
      <div class={classes.right}>
        <StyledLink href={paths.album(props.album.id)} class={classes.heading}>
          {formatAlbum(props.album)}
        </StyledLink>
        <Show when={props.album.reviews.length > 0}>
          <span class={classes.subheading}>{t("ReviewItem.reviews")}</span>
        </Show>
        <For each={props.album.reviews}>
          {(review) => (
            <ReviewItem review={review} onReviewChange={handleReviewChange} />
          )}
        </For>
        <AlbumActions
          album={props.album}
          onAlbumDelete={handleAlbumDelete}
          onAlbumUpdate={handleAlbumUpdate}
          onReviewInsert={handleReviewChange}
        />
      </div>
    </div>
  );
};

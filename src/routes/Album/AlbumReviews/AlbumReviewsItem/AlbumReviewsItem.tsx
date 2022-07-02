import { StyledLink } from "@components/StyledLink/StyledLink";
import { AlbumActions } from "@modules/AlbumActions/AlbumActions";
import { AlbumCoversCarousel } from "@modules/AlbumCoversCarousel/AlbumCoversCarousel";
import { useAlbumResource } from "@routes/Album/Album.utils";
import {
  AlbumWithArtistFragment,
  AlbumWithReviewsFragment,
} from "@services/types";
import { formatAlbum } from "@utils/formatters";
import { paths } from "@utils/paths";
import { useNavigate } from "solid-app-router";
import { Component, For } from "solid-js";
import * as classes from "./AlbumReviewsItem.css";
import { ReviewItem } from "./ReviewItem/ReviewItem";

type Props = {
  isCurrent: boolean;
  album: AlbumWithReviewsFragment & AlbumWithArtistFragment;
};

export const AlbumReviewsItem: Component<Props> = (props) => {
  const navigate = useNavigate();
  const { refetchAlbums, refetchAlbum } = useAlbumResource();

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
      <AlbumCoversCarousel
        isHovering={false}
        label={formatAlbum(props.album)}
        sid={props.album.sid}
        kind="small"
      />
      <div class={classes.right}>
        <StyledLink href={paths.album(props.album.id)}>
          {formatAlbum(props.album)}
        </StyledLink>
        <AlbumActions
          album={props.album}
          onAlbumDelete={handleAlbumDelete}
          onAlbumUpdate={handleAlbumUpdate}
          onReviewInsert={handleReviewChange}
        />
        <For each={props.album.reviews}>
          {(review) => (
            <ReviewItem review={review} onReviewChange={handleReviewChange} />
          )}
        </For>
      </div>
    </div>
  );
};

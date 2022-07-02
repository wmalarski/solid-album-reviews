import { StyledLink } from "@components/StyledLink/StyledLink";
import { AlbumCoversCarousel } from "@modules/AlbumCoversCarousel/AlbumCoversCarousel";
import { ReviewActions } from "@modules/ReviewActions/ReviewActions";
import { ReviewWithAlbumAndArtistFragment } from "@services/types";
import { formatAlbum } from "@utils/formatters";
import { paths } from "@utils/paths";
import { Component } from "solid-js";
import * as classes from "./ReviewsListItem.css";

type Props = {
  review: ReviewWithAlbumAndArtistFragment;
  onReviewChange: () => void;
};

export const ReviewsListItem: Component<Props> = (props) => {
  return (
    <div class={classes.container}>
      <AlbumCoversCarousel
        isHovering={false}
        label={formatAlbum(props.review.albumByAlbum)}
        sid={props.review.albumByAlbum.sid}
        kind="small"
      />
      <div class={classes.right}>
        <div class={classes.data}>
          <StyledLink href={paths.album(props.review.albumByAlbum.id)}>
            {formatAlbum(props.review.albumByAlbum)}
          </StyledLink>
          <span>{props.review.text}</span>
          <span>{props.review.rate}</span>
          <span>{props.review.createdAt}</span>
        </div>
        <ReviewActions
          review={props.review}
          onReviewDelete={() => props.onReviewChange()}
          onReviewUpdate={() => props.onReviewChange()}
        />
      </div>
    </div>
  );
};

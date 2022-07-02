import { StyledLink } from "@components/StyledLink/StyledLink";
import { AlbumCoversCarousel } from "@modules/AlbumCoversCarousel/AlbumCoversCarousel";
import { ReviewActions } from "@modules/ReviewActions/ReviewActions";
import { ReviewWithAlbumAndArtistFragment } from "@services/types";
import { useI18n } from "@solid-primitives/i18n";
import { formatAlbum } from "@utils/formatters";
import { paths } from "@utils/paths";
import { Component } from "solid-js";
import * as classes from "./ReviewsListItem.css";

type Props = {
  review: ReviewWithAlbumAndArtistFragment;
  onReviewChange: () => void;
};

export const ReviewsListItem: Component<Props> = (props) => {
  const [t] = useI18n();

  return (
    <div class={classes.container}>
      <AlbumCoversCarousel
        isHovering={false}
        label={formatAlbum(props.review.albumByAlbum)}
        sid={props.review.albumByAlbum.sid}
        kind="small"
      />
      <div class={classes.right}>
        <StyledLink
          href={paths.album(props.review.albumByAlbum.id)}
          class={classes.heading}
        >
          {formatAlbum(props.review.albumByAlbum)}
        </StyledLink>
        <div class={classes.data}>
          <span>{t("ReviewItem.rate")}</span>
          <span>{props.review.text}</span>
          <span>{t("ReviewItem.text")}</span>
          <span>{props.review.rate}</span>
          <span>{t("ReviewItem.date")}</span>
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

import { StyledLink } from "@components/StyledLink/StyledLink";
import { AlbumActions } from "@modules/AlbumActions/AlbumActions";
import { AlbumCoversCarousel } from "@modules/AlbumCoversCarousel/AlbumCoversCarousel";
import { useSearchResource } from "@routes/Search/Search.utils";
import { AlbumWithArtistFragment } from "@services/types";
import { formatAlbum } from "@utils/formatters";
import { paths } from "@utils/paths";
import { Component } from "solid-js";
import * as classes from "./ResultItem.css";

type Props = {
  album: AlbumWithArtistFragment;
};

export const ResultItem: Component<Props> = (props) => {
  const { refetch } = useSearchResource();

  return (
    <div class={classes.container}>
      <AlbumCoversCarousel
        isHovering={false}
        label={formatAlbum(props.album)}
        sid={props.album.sid}
        kind="small"
      />
      <div class={classes.right}>
        <StyledLink href={paths.album(props.album.id)} class={classes.heading}>
          {formatAlbum(props.album)}
        </StyledLink>
        <AlbumActions
          album={props.album}
          onAlbumDelete={refetch}
          onReviewInsert={refetch} // TODO remove
          onAlbumUpdate={refetch}
        />
      </div>
    </div>
  );
};

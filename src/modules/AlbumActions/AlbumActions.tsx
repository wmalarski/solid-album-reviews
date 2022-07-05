import { InsertReviewDialog } from "@modules/AlbumActions/InsertReviewDialog/InsertReviewDialog";
import { GoogleRedirectButton } from "@modules/GoogleRedirectButton/GoogleRedirectButton";
import { YtRedirectButton } from "@modules/YtRedirectButton/YtRedirectButton";
import { AlbumWithArtistFragment } from "@services/types";
import { Component } from "solid-js";
import * as classes from "./AlbumActions.css";
import { DeleteAlbumDialog } from "./DeleteAlbumDialog/DeleteAlbumDialog";
import { UpdateAlbumDialog } from "./UpdateAlbumDialog/UpdateAlbumDialog";

type Props = {
  album: AlbumWithArtistFragment;
  onAlbumDelete: () => void;
  onReviewInsert?: () => void;
  onAlbumUpdate: () => void;
  asIcons?: boolean;
};

export const AlbumActions: Component<Props> = (props) => {
  return (
    <div class={classes.container}>
      <YtRedirectButton album={props.album} isIcon={props.asIcons} />
      <GoogleRedirectButton album={props.album} isIcon={props.asIcons} />
      <InsertReviewDialog
        albumId={props.album.id}
        onSuccess={() => props.onReviewInsert?.()}
        isIcon={props.asIcons}
      />
      <UpdateAlbumDialog
        album={props.album}
        onSuccess={() => props.onAlbumUpdate()}
        isIcon={props.asIcons}
      />
      <DeleteAlbumDialog
        albumId={props.album.id}
        onSuccess={() => props.onAlbumDelete()}
        isIcon={props.asIcons}
      />
    </div>
  );
};

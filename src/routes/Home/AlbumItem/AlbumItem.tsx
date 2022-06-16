import { AlbumCover } from "@components/AlbumCover/AlbumCover";
import type { RandomAlbumWithArtistFragment } from "@services/types";
import { formatAlbum } from "@utils/formatters";
import type { Component } from "solid-js";

type Props = {
  album: RandomAlbumWithArtistFragment;
};

export const AlbumItem: Component<Props> = (props) => {
  return (
    <div>
      <AlbumCover label={formatAlbum(props.album)} mBid={props.album.sid} />
      <span>{props.album.title}</span>
    </div>
  );
};

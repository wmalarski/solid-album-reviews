import {} from "@solidjs/router";
import type { Component } from "solid-js";
import { AlbumActions } from "~/modules/AlbumActions/AlbumActions";
import { AlbumCover } from "~/modules/AlbumCover/AlbumCover";
import type { Album, Artist } from "~/store/types";
import { formatAlbum } from "~/utils/formatters";
import * as classes from "./AlbumDetails.css";

type AlbumDetailsProps = {
	albumId: string;
	album: Album;
	artist: Artist;
};

export const AlbumDetails: Component<AlbumDetailsProps> = (props) => {
	return (
		<div class={classes.container}>
			<h1>{formatAlbum(props.album)}</h1>
			<AlbumCover
				label={formatAlbum(props.album)}
				sid={props.album.sid}
				kind="large"
			/>
			<AlbumActions
				albumId={props.albumId}
				album={props.album}
				artist={props.artist}
			/>
		</div>
	);
};

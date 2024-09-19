import type { Component } from "solid-js";
import { Link } from "~/components/link";
import { AlbumActions } from "~/modules/albums/AlbumActions/AlbumActions";
import { AlbumCover } from "~/modules/albums/AlbumCover/AlbumCover";
import type { Album, Artist } from "~/store/types";
import { formatAlbum } from "~/utils/formatters";
import { paths } from "~/utils/paths";
import * as classes from "./ResultItem.css";

type ResultItemProps = {
	albumId: string;
	artist: Artist;
	album: Album;
};

export const ResultItem: Component<ResultItemProps> = (props) => {
	return (
		<div class={classes.container}>
			<AlbumCover
				label={formatAlbum(props.album)}
				sid={props.album.sid}
				kind="small"
			/>
			<div class={classes.right}>
				<Link href={paths.album(props.albumId)} class={classes.heading}>
					{formatAlbum(props.album)}
				</Link>
				<AlbumActions albumId={props.albumId} />
			</div>
		</div>
	);
};

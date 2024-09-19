import type { Component } from "solid-js";
import { StyledLink } from "~/components/StyledLink/StyledLink";
import { AlbumActions } from "~/modules/AlbumActions/AlbumActions";
import { AlbumCover } from "~/modules/AlbumCover/AlbumCover";
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
				<StyledLink href={paths.album(props.albumId)} class={classes.heading}>
					{formatAlbum(props.album)}
				</StyledLink>
				<AlbumActions albumId={props.albumId} />
			</div>
		</div>
	);
};

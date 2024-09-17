import type { Component } from "solid-js";
import { InsertReviewDialog } from "~/modules/AlbumActions/InsertReviewDialog/InsertReviewDialog";
import { GoogleRedirectButton } from "~/modules/GoogleRedirectButton/GoogleRedirectButton";
import { YtRedirectButton } from "~/modules/YtRedirectButton/YtRedirectButton";
import type { Album, Artist } from "~/store/types";
import * as classes from "./AlbumActions.css";
import { DeleteAlbumDialog } from "./DeleteAlbumDialog/DeleteAlbumDialog";
import { UpdateAlbumDialog } from "./UpdateAlbumDialog/UpdateAlbumDialog";

type AlbumActionsProps = {
	albumId: string;
	album: Album;
	artist: Artist;
	asIcons?: boolean;
};

export const AlbumActions: Component<AlbumActionsProps> = (props) => {
	return (
		<div class={classes.container}>
			<YtRedirectButton
				artist={props.artist}
				album={props.album}
				isIcon={props.asIcons}
			/>
			<GoogleRedirectButton
				album={props.album}
				artist={props.artist}
				isIcon={props.asIcons}
			/>
			<InsertReviewDialog albumId={props.albumId} isIcon={props.asIcons} />
			<UpdateAlbumDialog
				album={props.album}
				isIcon={props.asIcons}
				albumId={props.albumId}
			/>
			<DeleteAlbumDialog albumId={props.albumId} isIcon={props.asIcons} />
		</div>
	);
};

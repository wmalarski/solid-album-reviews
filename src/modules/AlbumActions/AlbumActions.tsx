import { createAsync } from "@solidjs/router";
import { type Component, Show } from "solid-js";
import { InsertReviewDialog } from "~/modules/AlbumActions/InsertReviewDialog/InsertReviewDialog";
import { GoogleRedirectButton } from "~/modules/GoogleRedirectButton/GoogleRedirectButton";
import { YtRedirectButton } from "~/modules/YtRedirectButton/YtRedirectButton";
import { selectAlbumLoader } from "~/services/album";
import type { Album } from "~/store/types";
import * as classes from "./AlbumActions.css";
import { DeleteAlbumDialog } from "./DeleteAlbumDialog/DeleteAlbumDialog";
import { UpdateAlbumDialog } from "./UpdateAlbumDialog/UpdateAlbumDialog";

type AlbumActionsProps = {
	albumId: string;
	album: Album;
	asIcons?: boolean;
};

export const AlbumActions: Component<AlbumActionsProps> = (props) => {
	const album = createAsync(() => selectAlbumLoader(props.albumId));

	return (
		<Show when={album()}>
			{(album) => (
				<div class={classes.container}>
					<YtRedirectButton album={album()} isIcon={props.asIcons} />
					<GoogleRedirectButton album={album()} isIcon={props.asIcons} />
					<InsertReviewDialog albumId={props.albumId} isIcon={props.asIcons} />
					<UpdateAlbumDialog
						album={album()}
						isIcon={props.asIcons}
						albumId={props.albumId}
					/>
					<DeleteAlbumDialog albumId={props.albumId} isIcon={props.asIcons} />
				</div>
			)}
		</Show>
	);
};

import { createAsync } from "@solidjs/router";
import { type Component, Show } from "solid-js";
import { InsertReviewDialog } from "~/modules/albums/AlbumActions/InsertReviewDialog/InsertReviewDialog";
import { GoogleRedirectButton } from "~/modules/common/GoogleRedirectButton/GoogleRedirectButton";
import { YtRedirectButton } from "~/modules/common/YtRedirectButton/YtRedirectButton";
import { selectAlbumLoader } from "~/services/album";
import { Flex } from "~/styled-system/jsx";
import { DeleteAlbumDialog } from "./DeleteAlbumDialog/DeleteAlbumDialog";
import { UpdateAlbumDialog } from "./UpdateAlbumDialog/UpdateAlbumDialog";

type AlbumActionsProps = {
	albumId: string;
	asIcons?: boolean;
};

export const AlbumActions: Component<AlbumActionsProps> = (props) => {
	const album = createAsync(() => selectAlbumLoader(props.albumId));

	return (
		<Show when={album()}>
			{(album) => (
				<Flex gap="2" padding="4" flexWrap="nowrap">
					<YtRedirectButton album={album()} />
					<GoogleRedirectButton album={album()} />
					<InsertReviewDialog albumId={props.albumId} />
					<UpdateAlbumDialog album={album()} albumId={props.albumId} />
					<DeleteAlbumDialog albumId={props.albumId} />
				</Flex>
			)}
		</Show>
	);
};

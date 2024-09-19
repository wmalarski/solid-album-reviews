import type { Component } from "solid-js";
import { InsertReviewDialog } from "~/modules/albums/AlbumActions/InsertReviewDialog/InsertReviewDialog";
import { GoogleRedirectButton } from "~/modules/common/GoogleRedirectButton/GoogleRedirectButton";
import { YtRedirectButton } from "~/modules/common/YtRedirectButton/YtRedirectButton";
import type { Album } from "~/store/types";
import { Flex } from "~/styled-system/jsx";
import { DeleteAlbumDialog } from "./DeleteAlbumDialog/DeleteAlbumDialog";
import { UpdateAlbumDialog } from "./UpdateAlbumDialog/UpdateAlbumDialog";

type AlbumActionsProps = {
	album: Album;
	albumId: string;
};

export const AlbumActions: Component<AlbumActionsProps> = (props) => {
	return (
		<Flex gap="2" padding="4" flexWrap="nowrap">
			<YtRedirectButton album={props.album} />
			<GoogleRedirectButton album={props.album} />
			<InsertReviewDialog albumId={props.albumId} />
			<UpdateAlbumDialog album={props.album} albumId={props.albumId} />
			<DeleteAlbumDialog albumId={props.albumId} />
		</Flex>
	);
};

import type { Component } from "solid-js";
import { Link } from "~/components/link";
import { AlbumActions } from "~/modules/albums/AlbumActions/AlbumActions";
import { AlbumCover } from "~/modules/albums/AlbumCover/AlbumCover";
import type { Album } from "~/store/types";
import { css } from "~/styled-system/css";
import { formatAlbum } from "~/utils/formatters";
import { paths } from "~/utils/paths";

type ResultItemProps = {
	albumId: string;
	album: Album;
};

export const ResultItem: Component<ResultItemProps> = (props) => {
	return (
		<div
			class={css({
				backgroundColor: "background",
				display: "flex",
				padding: "4",
			})}
		>
			<AlbumCover
				label={formatAlbum(props.album)}
				sid={props.album.sid}
				kind="small"
			/>
			<div
				class={css({
					alignItems: "flex-start",
					display: "flex",
					flexDirection: "column",
				})}
			>
				<Link
					href={paths.album(props.albumId)}
					class={css({
						fontSize: "4",
						padding: "4",
					})}
				>
					{formatAlbum(props.album)}
				</Link>
				<AlbumActions album={props.album} albumId={props.albumId} />
			</div>
		</div>
	);
};

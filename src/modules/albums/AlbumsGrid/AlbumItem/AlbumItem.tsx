import { createAsync } from "@solidjs/router";
import { type Component, Show, createMemo, createSignal } from "solid-js";
import { Link } from "~/components/link";
import { AlbumActions } from "~/modules/albums/AlbumActions/AlbumActions";
import { selectAlbumLoader } from "~/services/album";
import type { Album } from "~/store/types";
import { css } from "~/styled-system/css";
import { formatAlbum } from "~/utils/formatters";
import { paths } from "~/utils/paths";
import { AlbumCover } from "../../AlbumCover/AlbumCover";

type AlbumItemViewProps = {
	albumId: string;
	album: Album;
};

const AlbumItemView: Component<AlbumItemViewProps> = (props) => {
	const [isHovering, setIsHovering] = createSignal(false);

	const label = createMemo(() => formatAlbum(props.album));

	const handleMouseEnter = () => {
		setIsHovering(true);
	};

	const handleMouseLeave = () => {
		setIsHovering(false);
	};

	return (
		<div
			class={css({
				backgroundColor: "background",
				height: "smallCover",
				position: "relative",
				width: "smallCover",
			})}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div
				class={css({
					backgroundColor: "background",
					overflow: "hidden",
					position: "absolute",
					transition: "top 0.2s, left 0.2s",
				})}
			>
				<AlbumCover kind="large" label={label()} sid={props.album.sid} />
				<Show when={isHovering()}>
					<div class={css({ backgroundColor: "background" })}>
						<Link
							href={paths.album(props.albumId)}
							class={css({
								display: "inline-block",
								maxWidth: "smallCoverHover",
								overflow: "hidden",
								paddingX: "4",
								whiteSpace: "nowrap",
								textOverflow: "ellipsis",
							})}
						>
							{label()}
						</Link>
						<AlbumActions album={props.album} albumId={props.albumId} />
					</div>
				</Show>
			</div>
		</div>
	);
};

type AlbumItemProps = {
	albumId: string;
};

export const AlbumItem: Component<AlbumItemProps> = (props) => {
	const album = createAsync(() => selectAlbumLoader(props.albumId));

	return (
		<Show when={album()}>
			{(album) => <AlbumItemView albumId={props.albumId} album={album()} />}
		</Show>
	);
};

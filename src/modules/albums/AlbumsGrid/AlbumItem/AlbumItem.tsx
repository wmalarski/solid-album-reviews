import { createAsync } from "@solidjs/router";
import clsx from "clsx";
import { type Component, Show, createMemo, createSignal } from "solid-js";
import { StyledLink } from "~/components/StyledLink/StyledLink";
import { AlbumActions } from "~/modules/albums/AlbumActions/AlbumActions";
import { selectAlbumLoader } from "~/services/album";
import type { Album } from "~/store/types";
import { formatAlbum } from "~/utils/formatters";
import { paths } from "~/utils/paths";
import { AlbumCoversCarousel } from "./AlbumCoversCarousel/AlbumCoversCarousel";
import * as classes from "./AlbumItem.css";

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
			class={classes.container}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div
				class={clsx(
					classes.wrapper,
					// classes.wrapperVariants[isHovering() ? "hover" : "no"],
				)}
			>
				<Show when={props.album.sid}>
					{(mBid) => (
						<AlbumCoversCarousel
							isHovering={isHovering()}
							label={label()}
							sid={mBid()}
						/>
					)}
				</Show>
				<Show when={isHovering()}>
					<div class={classes.footer}>
						<StyledLink
							class={classes.heading}
							href={paths.album(props.albumId)}
						>
							{label()}
						</StyledLink>
						<AlbumActions albumId={props.albumId} asIcons />
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

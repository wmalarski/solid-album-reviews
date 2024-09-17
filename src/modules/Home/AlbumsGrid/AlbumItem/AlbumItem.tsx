import { useNavigate } from "@solidjs/router";
import clsx from "clsx";
import { type Component, Show, createMemo, createSignal } from "solid-js";
import { StyledLink } from "~/components/StyledLink/StyledLink";
import { AlbumActions } from "~/modules/AlbumActions/AlbumActions";
import type { Album, Artist } from "~/store/types";
import { formatAlbum } from "~/utils/formatters";
import { paths } from "~/utils/paths";
import { AlbumCoversCarousel } from "./AlbumCoversCarousel/AlbumCoversCarousel";
import * as classes from "./AlbumItem.css";

type AlbumItemProps = {
	albumId: string;
	album: Album;
	artist: Artist;
};

export const AlbumItem: Component<AlbumItemProps> = (props) => {
	const navigate = useNavigate();

	const [isHovering, setIsHovering] = createSignal(false);

	const label = createMemo(() => {
		return formatAlbum(props.album);
	});

	const handleMouseEnter = () => {
		setIsHovering(true);
	};

	const handleMouseLeave = () => {
		setIsHovering(false);
	};

	const handleAlbumUpdate = () => {
		navigate(paths.album(props.albumId));
	};

	return (
		<div
			class={classes.container}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<Show when={props.album.sid}>
				{(mBid) => (
					<div
						class={clsx(
							classes.wrapper,
							classes.wrapperVariants[isHovering() ? "hover" : "no"],
						)}
					>
						<AlbumCoversCarousel
							isHovering={isHovering()}
							label={label()}
							sid={mBid()}
						/>
						<Show when={isHovering()}>
							<div class={classes.footer}>
								<StyledLink
									class={classes.heading}
									href={paths.album(props.albumId)}
								>
									{label()}
								</StyledLink>
								<AlbumActions
									album={props.album}
									albumId={props.albumId}
									artist={props.artist}
									asIcons
									onAlbumUpdate={handleAlbumUpdate}
								/>
							</div>
						</Show>
					</div>
				)}
			</Show>
		</div>
	);
};

import type { SearchDataLoaderResult } from "@routes/Search/Search.data";
import { useRouteData } from "solid-app-router";
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
	const { refetch } = useRouteData<SearchDataLoaderResult>();

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
				<AlbumActions
					album={props.album}
					artist={props.artist}
					albumId={props.albumId}
					onAlbumDelete={refetch}
					onAlbumUpdate={refetch}
				/>
			</div>
		</div>
	);
};

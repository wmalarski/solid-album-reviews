import {
	type RouteSectionProps,
	createAsync,
	useParams,
} from "@solidjs/router";
import type { Component } from "solid-js";
import { selectAlbumLoader } from "~/services/album";
import * as classes from "./Album.css";
import { AlbumDetails } from "./AlbumDetails/AlbumDetails";

const AlbumPage: Component<RouteSectionProps> = (props) => {
	const params = useParams();

	const album = createAsync(() => selectAlbumLoader(params.boardId));

	return (
		<div class={classes.container}>
			<AlbumDetails album={album()} />
			{props.children}
		</div>
	);
};

export default AlbumPage;

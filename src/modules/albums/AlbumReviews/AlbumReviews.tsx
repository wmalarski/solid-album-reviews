import { createAsync, useParams, useSearchParams } from "@solidjs/router";
import { useRouteData } from "solid-app-router";
import { type Component, For } from "solid-js";
import { Pagination } from "~/components/pagination";
import { selectAlbumLoader } from "~/services/album";
import * as classes from "./AlbumReviews.css";
import type { AlbumReviewDataLoaderResult } from "./AlbumReviews.data";
import { AlbumReviewsItem } from "./AlbumReviewsItem/AlbumReviewsItem";

const AlbumReviews: Component = () => {
	const params = useParams();

	const [, setSearchParams] = useSearchParams();

	const handlePageChange = (update: number) => {
		setSearchParams({ page: update });
	};

	const album = createAsync(() => selectAlbumLoader(params.albumId));

	const { albums, maxPage, page, albumId } =
		useRouteData<AlbumReviewDataLoaderResult>();

	return (
		<div class={classes.container}>
			<For each={albums()?.data?.album}>
				{(album) => (
					<AlbumReviewsItem
						albumId={albumId}
						album={album}
						reviews={reviews}
						isCurrent={album.id === albumId()}
					/>
				)}
			</For>
			<Pagination
				current={page()}
				maxPage={maxPage()}
				onChange={handlePageChange}
			/>
		</div>
	);
};

export default AlbumReviews;

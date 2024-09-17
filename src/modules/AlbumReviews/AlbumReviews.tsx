import { useSearchParams } from "@solidjs/router";
import { useRouteData } from "solid-app-router";
import { type Component, For, Show } from "solid-js";
import { Pagination } from "~/components/Pagination/Pagination";
import * as classes from "./AlbumReviews.css";
import type { AlbumReviewDataLoaderResult } from "./AlbumReviews.data";
import { AlbumReviewsItem } from "./AlbumReviewsItem/AlbumReviewsItem";

const AlbumReviews: Component = () => {
	const [, setSearchParams] = useSearchParams();

	const handlePageChange = (update: number) => {
		setSearchParams({ page: update });
	};

	const { album, albums, maxPage, page, albumId } =
		useRouteData<AlbumReviewDataLoaderResult>();

	return (
		<div class={classes.container}>
			<Show when={album()?.data?.albumByPk?.artistByArtist}>
				{(artist) => (
					<For each={albums()?.data?.album}>
						{(album) => (
							<AlbumReviewsItem
								artist={artist()}
								albumId={albumId}
								album={album}
								reviews={reviews}
								isCurrent={album.id === albumId()}
							/>
						)}
					</For>
				)}
			</Show>
			<Pagination
				current={page()}
				maxPage={maxPage()}
				onChange={handlePageChange}
			/>
		</div>
	);
};

export default AlbumReviews;

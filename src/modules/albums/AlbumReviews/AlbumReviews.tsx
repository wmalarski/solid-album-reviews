import { createAsync, useParams, useSearchParams } from "@solidjs/router";
import { type Component, For } from "solid-js";
import { Pagination } from "~/components/pagination";
import { selectArtistAlbumIdsLoader } from "~/services/album";
import { Flex } from "~/styled-system/jsx";
import { AlbumReviewsItem } from "./AlbumReviewsItem/AlbumReviewsItem";

export const AlbumReviews: Component = () => {
	const params = useParams();

	const [, setSearchParams] = useSearchParams();

	const handlePageChange = (update: number) => {
		setSearchParams({ page: update });
	};

	const albums = createAsync(() =>
		selectArtistAlbumIdsLoader(params.albumId, 0),
	);

	return (
		<Flex flexDirection="column" gap="4">
			<For each={albums()?.data}>
				{(albumId) => <AlbumReviewsItem albumId={albumId} />}
			</For>
			<Pagination
				page={+params.page}
				count={albums()?.maxPage ?? 0}
				onPageChange={({ page }) => handlePageChange(page)}
			/>
		</Flex>
	);
};

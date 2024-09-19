import { createAsync, revalidate } from "@solidjs/router";
import { type Component, For, Suspense } from "solid-js";
import { Button } from "~/components/button";
import { useI18n } from "~/contexts/I18nContext";
import {
	SELECT_RANDOM_IDS_LOADER_CACHE_KEY,
	selectRandomIdsLoader,
} from "~/services/album";
import { AlbumItem } from "./AlbumItem/AlbumItem";
import * as classes from "./AlbumsGrid.css";

export const AlbumsGrid: Component = () => {
	const { t } = useI18n();

	const randomAlbums = createAsync(() => selectRandomIdsLoader());

	const handleRefetchClick = () => {
		revalidate(SELECT_RANDOM_IDS_LOADER_CACHE_KEY);
	};

	return (
		<Suspense>
			<div class={classes.container}>
				<div class={classes.grid}>
					<For each={randomAlbums()}>
						{(albumId) => <AlbumItem albumId={albumId} />}
					</For>
				</div>
				<Button onClick={handleRefetchClick}>{t("home.refetch")}</Button>
			</div>
		</Suspense>
	);
};

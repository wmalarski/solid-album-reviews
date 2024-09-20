import { createAsync, revalidate } from "@solidjs/router";
import { type Component, For, Suspense } from "solid-js";
import { Button } from "~/components/button";
import { useI18n } from "~/contexts/I18nContext";
import {
	SELECT_RANDOM_IDS_LOADER_CACHE_KEY,
	selectRandomIdsLoader,
} from "~/services/album";
import { css } from "~/styled-system/css";
import { AlbumItem } from "./AlbumItem/AlbumItem";

export const AlbumsGrid: Component = () => {
	const { t } = useI18n();

	const randomAlbums = createAsync(() => selectRandomIdsLoader());

	const handleRefetchClick = () => {
		revalidate(SELECT_RANDOM_IDS_LOADER_CACHE_KEY);
	};

	return (
		<Suspense>
			<div
				class={css({
					display: "flex",
					flexDirection: "column",
					gap: "4",
					paddingBottom: "8",
					width: "full",
				})}
			>
				<div
					class={css({
						display: "grid",
						justifyContent: "center",
						paddingBottom: "8",
						paddingTop: "8",
						width: "full",
						gridTemplateColumns: "repeat(auto-fit, 200px)",
						margin: "0 auto",
					})}
				>
					<For each={randomAlbums()}>
						{(albumId) => <AlbumItem albumId={albumId} />}
					</For>
				</div>
				<Button onClick={handleRefetchClick}>{t("home.refetch")}</Button>
			</div>
		</Suspense>
	);
};

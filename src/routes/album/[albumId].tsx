import { createAsync, useParams } from "@solidjs/router";
import { type ParentProps, Show, Suspense } from "solid-js";
import { AlbumActions } from "~/modules/AlbumActions/AlbumActions";
import { AlbumCover } from "~/modules/AlbumCover/AlbumCover";
import { selectAlbumLoader } from "~/services/album";
import { css } from "~/styled-system/css";
import { formatAlbum } from "~/utils/formatters";

export default function AlbumPage(props: ParentProps) {
	const params = useParams();

	const album = createAsync(() => selectAlbumLoader(params.albumId));

	return (
		<div
			class={css({
				display: "flex",
				flexDirection: "column",
				gap: "4",
				padding: "4",
			})}
		>
			<Suspense>
				<Show when={album()}>
					{(album) => (
						<div
							class={css({
								backgroundColor: "background",
								padding: "4",
							})}
						>
							<h1>{formatAlbum(album())}</h1>
							<AlbumCover
								label={formatAlbum(album())}
								sid={album().sid}
								kind="large"
							/>
							<AlbumActions albumId={params.albumId} />
						</div>
					)}
				</Show>
			</Suspense>
			{props.children}
		</div>
	);
}

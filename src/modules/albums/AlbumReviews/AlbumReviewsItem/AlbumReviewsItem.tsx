import { createAsync } from "@solidjs/router";
import { type Component, For, Show } from "solid-js";
import { Link } from "~/components/link";
import { useI18n } from "~/contexts/I18nContext";
import { AlbumActions } from "~/modules/albums/AlbumActions/AlbumActions";
import { AlbumCover } from "~/modules/albums/AlbumCover/AlbumCover";
import { selectAlbumLoader } from "~/services/album";
import { selectAlbumReviewIdsLoader } from "~/services/review";
import { css } from "~/styled-system/css";
import { Flex } from "~/styled-system/jsx";
import { formatAlbum } from "~/utils/formatters";
import { paths } from "~/utils/paths";
import { ReviewItem } from "./ReviewItem/ReviewItem";

type AlbumReviewsItemProps = {
	albumId: string;
};

export const AlbumReviewsItem: Component<AlbumReviewsItemProps> = (props) => {
	const { t } = useI18n();

	const album = createAsync(() => selectAlbumLoader(props.albumId));

	const reviews = createAsync(() =>
		selectAlbumReviewIdsLoader(props.albumId, 0),
	);

	return (
		<Show when={album()}>
			{(album) => (
				<Flex padding="4">
					<AlbumCover
						label={formatAlbum(album())}
						sid={album().sid}
						kind="small"
					/>
					<Flex alignItems="flex-start" flexDirection="column">
						<Link
							href={paths.album(props.albumId)}
							class={css({ fontSize: "4", padding: "4" })}
						>
							{formatAlbum(album())}
						</Link>
						<Show when={(reviews()?.length ?? 0) > 0}>
							<span class={css({ fontSize: "3", paddingLeft: "4" })}>
								{t("ReviewItem.reviews")}
							</span>
						</Show>
						<For each={reviews()?.data}>
							{(reviewId) => <ReviewItem album={album()} reviewId={reviewId} />}
						</For>
						<AlbumActions album={album()} albumId={props.albumId} />
					</Flex>
				</Flex>
			)}
		</Show>
	);
};

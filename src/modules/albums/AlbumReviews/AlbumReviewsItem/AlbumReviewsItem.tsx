import {} from "@solidjs/router";
import { type Component, For, Show } from "solid-js";
import { Link } from "~/components/link";
import { useI18n } from "~/contexts/I18nContext";
import { AlbumActions } from "~/modules/albums/AlbumActions/AlbumActions";
import { AlbumCover } from "~/modules/albums/AlbumCover/AlbumCover";
import type { Album, Review } from "~/store/types";
import { formatAlbum } from "~/utils/formatters";
import { paths } from "~/utils/paths";
import * as classes from "./AlbumReviewsItem.css";
import { ReviewItem } from "./ReviewItem/ReviewItem";

type AlbumReviewsItemProps = {
	isCurrent: boolean;
	albumId: string;
	album: Album;
	reviews: Review[];
};

export const AlbumReviewsItem: Component<AlbumReviewsItemProps> = (props) => {
	const { t } = useI18n();

	return (
		<div class={classes.container}>
			<AlbumCover
				label={formatAlbum(props.album)}
				sid={props.album.sid}
				kind="small"
			/>
			<div class={classes.right}>
				<Link href={paths.album(props.albumId)} class={classes.heading}>
					{formatAlbum(props.album)}
				</Link>
				<Show when={props.reviews.length > 0}>
					<span class={classes.subheading}>{t("ReviewItem.reviews")}</span>
				</Show>
				<For each={props.reviews}>
					{(review) => (
						<ReviewItem
							album={props.album}
							reviewId={review.id}
							review={review}
						/>
					)}
				</For>
				<AlbumActions albumId={props.albumId} />
			</div>
		</div>
	);
};

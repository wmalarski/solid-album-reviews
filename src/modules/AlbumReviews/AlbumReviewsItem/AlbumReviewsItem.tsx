import { useNavigate, useRouteData } from "solid-app-router";
import { type Component, For, Show } from "solid-js";
import { StyledLink } from "~/components/StyledLink/StyledLink";
import { useI18n } from "~/contexts/I18nContext";
import { AlbumActions } from "~/modules/AlbumActions/AlbumActions";
import { AlbumCover } from "~/modules/AlbumCover/AlbumCover";
import type { Album, Artist, Review } from "~/store/types";
import { formatAlbum } from "~/utils/formatters";
import { paths } from "~/utils/paths";
import type { AlbumReviewDataLoaderResult } from "../AlbumReviews.data";
import * as classes from "./AlbumReviewsItem.css";
import { ReviewItem } from "./ReviewItem/ReviewItem";

type AlbumReviewsItemProps = {
	isCurrent: boolean;
	albumId: string;
	artist: Artist;
	album: Album;
	reviews: Review[];
};

export const AlbumReviewsItem: Component<AlbumReviewsItemProps> = (props) => {
	const { t } = useI18n();

	const navigate = useNavigate();
	const { refetchAlbums, refetchAlbum } =
		useRouteData<AlbumReviewDataLoaderResult>();

	const handleAlbumDelete = () => {
		if (props.isCurrent) {
			navigate(paths.root);
			return;
		}
		refetchAlbums();
	};

	const handleAlbumUpdate = () => {
		if (props.isCurrent) {
			refetchAlbum();
		}
		refetchAlbums();
	};

	const handleReviewChange = () => {
		refetchAlbums();
	};

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
				<Show when={props.reviews.length > 0}>
					<span class={classes.subheading}>{t("ReviewItem.reviews")}</span>
				</Show>
				<For each={props.reviews}>
					{(review) => (
						<ReviewItem
							album={props.album}
							artist={props.artist}
							reviewId={review.id}
							review={review}
							onReviewChange={handleReviewChange}
						/>
					)}
				</For>
				<AlbumActions
					albumId={props.albumId}
					album={props.album}
					artist={props.artist}
					onAlbumDelete={handleAlbumDelete}
					onAlbumUpdate={handleAlbumUpdate}
					onReviewInsert={handleReviewChange}
				/>
			</div>
		</div>
	);
};

import clsx from "clsx";
import { type Component, createResource } from "solid-js";
import { type CoverKind, fetchCovers } from "~/services/coverArt";
import * as classes from "./AlbumCover.css";

type Props = {
	label: string;
	sid: string;
	kind: CoverKind;
};

export const AlbumCover: Component<Props> = (props) => {
	const [thumbnails] = createResource(
		() => ({ kind: props.kind, mBid: props.sid }),
		fetchCovers,
	);

	return (
		<img
			alt={props.label}
			aria-label={props.label}
			class={clsx(classes.image, classes.imageVariant[props.kind])}
			src={thumbnails()?.[0]}
		/>
	);
};

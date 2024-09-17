import { Button } from "@components/Button/Button";
import { redirectToYt } from "@services/redirects";
import type { AlbumWithArtistFragment } from "@services/types";
import { BsYoutube } from "solid-icons/bs";
import type { Component } from "solid-js";
import { useI18n } from "~/contexts/I18nContext";

type Props = {
	album: AlbumWithArtistFragment;
	isIcon?: boolean;
};

export const YtRedirectButton: Component<Props> = (props) => {
	const { t } = useI18n();

	const handleRedirectClick = () => {
		redirectToYt(props.album.title, props.album.artistByArtist.name);
	};

	return (
		<Button
			aria-label={t("YtRedirectButton.text")}
			onClick={handleRedirectClick}
		>
			{props.isIcon ? <BsYoutube size={20} /> : t("YtRedirectButton.text")}
		</Button>
	);
};

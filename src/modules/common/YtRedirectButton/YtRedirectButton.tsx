import { createAsync } from "@solidjs/router";
import { BsYoutube } from "solid-icons/bs";
import type { Component } from "solid-js";
import { Button } from "~/components/button";
import { useI18n } from "~/contexts/I18nContext";
import { selectArtistLoader } from "~/services/artist";
import { redirectToYt } from "~/services/redirects";
import type { Album } from "~/store/types";

type YtRedirectButtonProps = {
	album: Album;
	isIcon?: boolean;
};

export const YtRedirectButton: Component<YtRedirectButtonProps> = (props) => {
	const { t } = useI18n();

	const artist = createAsync(() => selectArtistLoader(props.album.artistId));

	const handleRedirectClick = () => {
		redirectToYt(props.album.title, artist()?.name ?? "");
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

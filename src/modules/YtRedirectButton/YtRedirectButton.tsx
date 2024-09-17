import { BsYoutube } from "solid-icons/bs";
import type { Component } from "solid-js";
import { Button } from "~/components/Button/Button";
import { useI18n } from "~/contexts/I18nContext";
import { redirectToYt } from "~/services/redirects";
import type { Album, Artist } from "~/store/types";

type Props = {
	album: Album;
	artist: Artist;
	isIcon?: boolean;
};

export const YtRedirectButton: Component<Props> = (props) => {
	const { t } = useI18n();

	const handleRedirectClick = () => {
		redirectToYt(props.album.title, props.artist.name);
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

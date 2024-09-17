import { BsGoogle } from "solid-icons/bs";
import type { Component } from "solid-js";
import { Button } from "~/components/Button/Button";
import { useI18n } from "~/contexts/I18nContext";
import { redirectToGoogle } from "~/services/redirects";
import type { AlbumWithArtistFragment } from "~/services/types";

type Props = {
	album: AlbumWithArtistFragment;
	isIcon?: boolean;
};

export const GoogleRedirectButton: Component<Props> = (props) => {
	const { t } = useI18n();

	const handleRedirectClick = () => {
		redirectToGoogle(props.album.title, props.album.artistByArtist.name);
	};

	return (
		<Button
			aria-label={t("GoogleRedirectButton.text")}
			onClick={handleRedirectClick}
		>
			{props.isIcon ? <BsGoogle size={20} /> : t("GoogleRedirectButton.text")}
		</Button>
	);
};

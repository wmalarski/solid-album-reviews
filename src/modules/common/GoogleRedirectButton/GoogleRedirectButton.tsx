import { createAsync } from "@solidjs/router";
import { BsGoogle } from "solid-icons/bs";
import type { Component } from "solid-js";
import { Button } from "~/components/button";
import { useI18n } from "~/contexts/I18nContext";
import { selectArtistLoader } from "~/services/artist";
import { redirectToGoogle } from "~/services/redirects";
import type { Album } from "~/store/types";

type GoogleRedirectButtonProps = {
	album: Album;
	isIcon?: boolean;
};

export const GoogleRedirectButton: Component<GoogleRedirectButtonProps> = (
	props,
) => {
	const { t } = useI18n();

	const artist = createAsync(() => selectArtistLoader(props.album.artistId));

	const handleRedirectClick = () => {
		redirectToGoogle(props.album.title, artist()?.name ?? "");
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

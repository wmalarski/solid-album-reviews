import { Button } from "@components/Button/Button";
import { redirectToGoogle } from "@services/redirects";
import { AlbumWithArtistFragment } from "@services/types";
import { useI18n } from "@solid-primitives/i18n";
import { BsGoogle } from "solid-icons/bs";
import { Component } from "solid-js";

type Props = {
  album: AlbumWithArtistFragment;
  isIcon?: boolean;
};

export const GoogleRedirectButton: Component<Props> = (props) => {
  const [t] = useI18n();

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

import { Button } from "@components/Button/Button";
import { redirectToYt } from "@services/redirects";
import { AlbumWithArtistFragment } from "@services/types";
import { useI18n } from "@solid-primitives/i18n";
import { BsYoutube } from "solid-icons/bs";
import { Component } from "solid-js";

type Props = {
  album: AlbumWithArtistFragment;
  isIcon?: boolean;
};

export const YtRedirectButton: Component<Props> = (props) => {
  const [t] = useI18n();

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

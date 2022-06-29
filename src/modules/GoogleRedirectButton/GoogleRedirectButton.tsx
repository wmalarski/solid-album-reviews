import { Button } from "@components/Button/Button";
import { redirectToGoogle } from "@services/redirects";
import { AlbumWithArtistFragment } from "@services/types";
import { useI18n } from "@solid-primitives/i18n";
import { Component } from "solid-js";

type Props = {
  album: AlbumWithArtistFragment;
};

export const GoogleRedirectButton: Component<Props> = (props) => {
  const [t] = useI18n();

  const handleRedirectClick = () => {
    redirectToGoogle(props.album.title, props.album.artistByArtist.name);
  };

  return (
    <Button onClick={handleRedirectClick}>
      {t("GoogleRedirectButton.text")}
    </Button>
  );
};

import { Button } from "@components/Button/Button";
import { redirectToYt } from "@services/redirects";
import { AlbumWithArtistFragment } from "@services/types";
import { useI18n } from "@solid-primitives/i18n";
import { Component } from "solid-js";

type Props = {
  album: AlbumWithArtistFragment;
};

export const YtRedirectButton: Component<Props> = (props) => {
  const [t] = useI18n();

  const handleRedirectClick = () => {
    redirectToYt(props.album.title, props.album.artistByArtist.name);
  };

  return (
    <Button onClick={handleRedirectClick}>{t("YtRedirectButton.text")}</Button>
  );
};

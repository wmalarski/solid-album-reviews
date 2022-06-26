import { redirectToYt } from "@services/redirects";
import { AlbumWithArtistFragment } from "@services/types";
import { useI18n } from "@solid-primitives/i18n";
import { Component } from "solid-js";
import * as classes from "./YtRedirectButton.css";

type Props = {
  album: AlbumWithArtistFragment;
};

export const YtRedirectButton: Component<Props> = (props) => {
  const [t] = useI18n();

  const handleRedirectClick = () => {
    redirectToYt(props.album.title, props.album.artistByArtist.name);
  };

  return (
    <button class={classes.container} onClick={handleRedirectClick}>
      {t("YtRedirectButton.text")}
    </button>
  );
};

import { redirectToGoogle } from "@services/redirects";
import { AlbumWithArtistFragment } from "@services/types";
import { useI18n } from "@solid-primitives/i18n";
import { Component } from "solid-js";
import * as classes from "./GoogleRedirectButton.css";

type Props = {
  album: AlbumWithArtistFragment;
};

export const GoogleRedirectButton: Component<Props> = (props) => {
  const [t] = useI18n();

  const handleRedirectClick = () => {
    redirectToGoogle(props.album.title, props.album.artistByArtist.name);
  };

  return (
    <button class={classes.container} onClick={handleRedirectClick}>
      {t("GoogleRedirectButton.text")}
    </button>
  );
};

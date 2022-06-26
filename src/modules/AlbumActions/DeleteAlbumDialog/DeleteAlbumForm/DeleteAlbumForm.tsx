import { useI18n } from "@solid-primitives/i18n";
import { Component } from "solid-js";
import * as classes from "./DeleteAlbumForm.css";

type Props = {
  onCancel: () => void;
  onDelete: () => void;
};

export const DeleteAlbumForm: Component<Props> = (props) => {
  const [t] = useI18n();

  return (
    <div class={classes.container}>
      <button class={classes.submit} onClick={() => props.onCancel()}>
        {t("DeleteAlbumForm.cancel")}
      </button>
      <button class={classes.submit} onClick={() => props.onDelete()}>
        {t("DeleteAlbumForm.remove")}
      </button>
    </div>
  );
};

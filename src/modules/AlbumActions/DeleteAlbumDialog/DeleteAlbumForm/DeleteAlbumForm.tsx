import { Button } from "@components/Button/Button";
import { FormActions } from "@components/Form/Form";
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
    <FormActions>
      <Button class={classes.submit} onClick={() => props.onCancel()}>
        {t("DeleteAlbumForm.cancel")}
      </Button>
      <Button class={classes.submit} onClick={() => props.onDelete()}>
        {t("DeleteAlbumForm.remove")}
      </Button>
    </FormActions>
  );
};

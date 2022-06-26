import { useI18n } from "@solid-primitives/i18n";
import { Component } from "solid-js";
import * as classes from "./DeleteReviewForm.css";

type Props = {
  onCancel: () => void;
  onDelete: () => void;
};

export const DeleteReviewForm: Component<Props> = (props) => {
  const [t] = useI18n();

  return (
    <div class={classes.container}>
      <button class={classes.submit} onClick={() => props.onCancel()}>
        {t("DeleteReviewForm.cancel")}
      </button>
      <button class={classes.submit} onClick={() => props.onDelete()}>
        {t("DeleteReviewForm.remove")}
      </button>
    </div>
  );
};

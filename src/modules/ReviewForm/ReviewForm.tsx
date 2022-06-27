import { Button } from "@components/Button/Button";
import {
  ReviewFragment,
  ReviewInsertInput,
  ReviewSetInput,
} from "@services/types";
import { useI18n } from "@solid-primitives/i18n";
import { Component, createSignal } from "solid-js";
import * as classes from "./ReviewForm.css";

type Props = {
  initialReview?: ReviewFragment;
  onClose: () => void;
  onSubmit: (input: ReviewInsertInput | ReviewSetInput) => void;
};

export const ReviewForm: Component<Props> = (props) => {
  const [t] = useI18n();

  const [text, setText] = createSignal(props.initialReview?.text || "");
  const [rate, setRate] = createSignal(props.initialReview?.rate || 0);

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    props.onSubmit({ rate: rate(), text: text() });
  };

  return (
    <form class={classes.container} onSubmit={handleSubmit}>
      <label>
        {t("ReviewForm.textLabel")}
        <input
          value={text()}
          onChange={(event) => setText(event.currentTarget.value)}
        />
      </label>
      <label>
        {t("ReviewForm.rateLabel")}
        <input
          type="number"
          min={0}
          max={10}
          step={0.1}
          value={rate()}
          onChange={(event) => setRate(Number(event.currentTarget.value))}
        />
      </label>
      <Button type="submit" class={classes.submit}>
        {t("ReviewForm.submit")}
      </Button>
    </form>
  );
};

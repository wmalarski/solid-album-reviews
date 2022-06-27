import { Button } from "@components/Button/Button";
import { Form, FormActions, FormLabel } from "@components/Form/Form";
import { Input } from "@components/Input/Input";
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
    <Form class={classes.container} onSubmit={handleSubmit}>
      <FormLabel>
        {t("ReviewForm.textLabel")}
        <Input
          value={text()}
          onChange={(event) => setText(event.currentTarget.value)}
        />
      </FormLabel>
      <FormLabel>
        {t("ReviewForm.rateLabel")}
        <Input
          type="number"
          min={0}
          max={10}
          step={0.1}
          value={rate()}
          onChange={(event) => setRate(Number(event.currentTarget.value))}
        />
      </FormLabel>
      <FormActions>
        <Button type="submit" class={classes.submit}>
          {t("ReviewForm.submit")}
        </Button>
      </FormActions>
    </Form>
  );
};

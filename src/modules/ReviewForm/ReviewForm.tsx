import { createButton } from "@solid-aria/button";
import { useI18n } from "@solid-primitives/i18n";
import { Component, createSignal } from "solid-js";
import * as classes from "./ReviewForm.css";

type Props = {
  onClose: () => void;
  onSubmit: () => void;
};

export const ReviewForm: Component<Props> = (props) => {
  const [t] = useI18n();

  const [text, setText] = createSignal("");
  const [rate, setRate] = createSignal(0);

  let closeButtonRef: HTMLButtonElement | undefined;

  const { buttonProps: closeButtonProps } = createButton(
    { onPress: () => props.onClose() },
    () => closeButtonRef
  );

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    props.onSubmit();
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
      <button {...closeButtonProps} ref={closeButtonRef} class={classes.submit}>
        {t("ReviewForm.submit")}
      </button>
    </form>
  );
};

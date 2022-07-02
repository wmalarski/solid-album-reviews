import { Button } from "@components/Button/Button";
import { FormLabel } from "@components/Form/Form";
import { Input } from "@components/Input/Input";
import { useI18n } from "@solid-primitives/i18n";
import { debounce } from "@solid-primitives/scheduled";
import { Component, createSignal } from "solid-js";
import { ReviewsLoaderArgs } from "../Reviews.utils";
import * as classes from "./ReviewsFilters.css";

type Props = {
  args: ReviewsLoaderArgs;
  onArgsChange: (range: ReviewsLoaderArgs) => void;
};

export const ReviewsFilters: Component<Props> = (props) => {
  const [t] = useI18n();

  const [input, setInput] = createSignal("");
  const [lower, setLower] = createSignal(0);
  const [upper, setUpper] = createSignal(10);

  const debouncedSetArgs = debounce((args: Partial<ReviewsLoaderArgs>) => {
    props.onArgsChange({ ...props.args, ...args });
  }, 250);

  const handleInputChange = (value: string) => {
    setInput(value);
    debouncedSetArgs({ query: value });
  };

  const handleLowerChange = (value: string) => {
    const next = Number(value);
    setLower(next);
    debouncedSetArgs({ lower: next });
  };

  const handleUpperChange = (value: string) => {
    const next = Number(value);
    setUpper(next);
    debouncedSetArgs({ upper: next });
  };

  const handleButtonClick = () => {
    props.onArgsChange({ lower: lower(), query: input(), upper: upper() });
  };

  return (
    <div class={classes.container}>
      <FormLabel class={classes.label}>
        {t("ReviewsFilters.search")}
        <Input
          class={classes.input}
          value={input()}
          onChange={(e) => handleInputChange(e.currentTarget.value)}
        />
      </FormLabel>
      <FormLabel class={classes.label}>
        {t("ReviewsFilters.lower")}
        <Input
          class={classes.input}
          type="number"
          min={0}
          value={lower()}
          step={0.1}
          max={upper()}
          onChange={(e) => handleLowerChange(e.currentTarget.value)}
        />
      </FormLabel>
      <FormLabel class={classes.label}>
        {t("ReviewsFilters.upper")}
        <Input
          class={classes.input}
          type="number"
          min={lower()}
          value={upper()}
          step={0.1}
          max={10}
          onChange={(e) => handleUpperChange(e.currentTarget.value)}
        />
      </FormLabel>
      <div class={classes.actions}>
        <Button onClick={handleButtonClick}>
          {t("ReviewsFilters.button")}
        </Button>
      </div>
    </div>
  );
};

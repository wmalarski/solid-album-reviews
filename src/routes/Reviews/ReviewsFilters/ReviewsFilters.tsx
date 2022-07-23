import { Button } from "@components/Button/Button";
import { FormLabel } from "@components/Form/Form";
import { Input } from "@components/Input/Input";
import { useI18n } from "@solid-primitives/i18n";
import { debounce } from "@solid-primitives/scheduled";
import { useRouteData, useSearchParams } from "solid-app-router";
import { Component, createSignal } from "solid-js";
import { ReviewsDataLoaderReturn, ReviewsLoaderArgs } from "../Reviews.data";
import * as classes from "./ReviewsFilters.css";

export const ReviewsFilters: Component = () => {
  const [, setSearchParams] = useSearchParams();

  const { args } = useRouteData<ReviewsDataLoaderReturn>();

  const [t] = useI18n();

  const [input, setInput] = createSignal("");
  const [lower, setLower] = createSignal(0);
  const [upper, setUpper] = createSignal(10);

  const debouncedSetArgs = debounce((update: Partial<ReviewsLoaderArgs>) => {
    setSearchParams({ ...args(), page: 0, ...update });
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
    setSearchParams({
      lower: lower(),
      page: 0,
      query: input(),
      upper: upper(),
    });
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

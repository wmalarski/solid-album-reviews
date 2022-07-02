import { Button } from "@components/Button/Button";
import { FormLabel } from "@components/Form/Form";
import { Input } from "@components/Input/Input";
import { useI18n } from "@solid-primitives/i18n";
import { debounce } from "@solid-primitives/scheduled";
import { Component, createSignal } from "solid-js";
import * as classes from "./SearchInput.css";

type Props = {
  onQueryChange: (query: string) => void;
};

export const SearchInput: Component<Props> = (props) => {
  const [t] = useI18n();

  const [input, setInput] = createSignal("");

  const debouncedSetQuery = debounce((arg: string) => {
    props.onQueryChange(arg);
  }, 250);

  const handleInputChange = (value: string) => {
    setInput(value);
    debouncedSetQuery(value);
  };

  const handleButtonClick = () => {
    props.onQueryChange(input());
  };

  return (
    <div class={classes.container}>
      <FormLabel class={classes.label}>
        {t("SearchInput.label")}
        <Input
          value={input()}
          placeholder={t("SearchInput.placeholder")}
          class={classes.input}
          onChange={(e) => handleInputChange(e.currentTarget.value)}
        />
      </FormLabel>
      <Button onClick={handleButtonClick}>{t("SearchInput.button")}</Button>
    </div>
  );
};

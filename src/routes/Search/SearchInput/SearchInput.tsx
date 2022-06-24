import { debounce } from "@solid-primitives/scheduled";
import { Component, createSignal } from "solid-js";
import * as classes from "./SearchInput.css";

type Props = {
  onSearchChange: (query: string) => void;
};

export const SearchInput: Component<Props> = (props) => {
  const [input, setInput] = createSignal("");
  const debouncedSetQuery = debounce(
    (arg: string) => props.onSearchChange(arg),
    250
  );

  const handleInputChange = (value: string) => {
    setInput(value);
    debouncedSetQuery(value);
  };

  return (
    <input
      class={classes.input}
      value={input()}
      onChange={(e) => handleInputChange(e.currentTarget.value)}
    />
  );
};

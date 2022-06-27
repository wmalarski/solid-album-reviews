import { Input } from "@components/Input/Input";
import { debounce } from "@solid-primitives/scheduled";
import { Component, createSignal } from "solid-js";

type Props = {
  onQueryChange: (query: string) => void;
};

export const SearchInput: Component<Props> = (props) => {
  const [input, setInput] = createSignal("");

  const debouncedSetQuery = debounce((arg: string) => {
    props.onQueryChange(arg);
  }, 250);

  const handleInputChange = (value: string) => {
    setInput(value);
    debouncedSetQuery(value);
  };

  return (
    <Input
      value={input()}
      onChange={(e) => handleInputChange(e.currentTarget.value)}
    />
  );
};

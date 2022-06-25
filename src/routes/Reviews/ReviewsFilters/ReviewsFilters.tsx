import { debounce } from "@solid-primitives/scheduled";
import { Component, createSignal } from "solid-js";
import * as classes from "./ReviewsFilters.css";

type FiltersRange = {
  lower: number;
  upper: number;
};

type Props = {
  range: FiltersRange;
  query: string;
  onRangeChange: (range: FiltersRange) => void;
  onQueryChange: (query: string) => void;
};

export const ReviewsFilters: Component<Props> = (props) => {
  const [input, setInput] = createSignal("");
  const [lower, setLower] = createSignal(0);
  const [upper, setUpper] = createSignal(10);

  const debouncedSetQuery = debounce((arg: string) => {
    props.onQueryChange(arg);
  }, 250);

  const debouncedSetRange = debounce((arg: FiltersRange) => {
    props.onRangeChange(arg);
  }, 250);

  const handleInputChange = (value: string) => {
    setInput(value);
    debouncedSetQuery(value);
  };

  const handleLowerChange = (value: string) => {
    const next = Number(value);
    setLower(next);
    debouncedSetRange({ lower: next, upper: upper() });
  };

  const handleUpperChange = (value: string) => {
    const next = Number(value);
    setUpper(next);
    debouncedSetRange({ lower: lower(), upper: next });
  };

  return (
    <div class={classes.container}>
      <input
        class={classes.input}
        value={input()}
        onChange={(e) => handleInputChange(e.currentTarget.value)}
      />
      <input
        class={classes.input}
        type="number"
        min={0}
        value={lower()}
        max={upper()}
        onChange={(e) => handleLowerChange(e.currentTarget.value)}
      />
      <input
        class={classes.input}
        type="number"
        min={lower()}
        value={upper()}
        max={10}
        onChange={(e) => handleUpperChange(e.currentTarget.value)}
      />
    </div>
  );
};

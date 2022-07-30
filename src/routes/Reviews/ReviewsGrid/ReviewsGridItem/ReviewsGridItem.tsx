import { useI18n } from "@solid-primitives/i18n";
import clsx from "clsx";
import { useSearchParams } from "solid-app-router";
import { Component } from "solid-js";
import { GridData } from "../ReviewsGrid.utils";
import * as classes from "./ReviewsGridItem.css";

type Props = {
  data: GridData;
};

const ranges: { variant: keyof typeof classes.colorVariants; value: number }[] =
  [
    { value: 0.1, variant: "level10" },
    { value: 0.2, variant: "level09" },
    { value: 0.3, variant: "level08" },
    { value: 0.4, variant: "level07" },
    { value: 0.5, variant: "level06" },
    { value: 0.6, variant: "level05" },
    { value: 0.7, variant: "level04" },
    { value: 0.8, variant: "level03" },
    { value: 0.9, variant: "level02" },
    { value: 1.0, variant: "level01" },
  ];

export const ReviewsGridItem: Component<Props> = (props) => {
  const [t] = useI18n();

  const [searchParams, setSearchParams] = useSearchParams();

  const variant = () => {
    return (
      ranges.find((range) => props.data.scale <= range.value)?.variant ||
      "level10"
    );
  };

  const handleClick = () => {
    setSearchParams({
      ...Object.fromEntries(
        Object.keys(searchParams).map((key) => [key, undefined])
      ),
      date: props.data.date.toISOString(),
    });
  };

  return (
    <button
      onClick={handleClick}
      class={clsx(classes.colorVariants[variant()])}
    >
      {JSON.stringify(props.data.scale, null, 2)}
    </button>
  );
};

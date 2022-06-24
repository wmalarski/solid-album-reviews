import { useI18n } from "@solid-primitives/i18n";
import { Component } from "solid-js";
import * as classes from "./Pagination.css";

type Props = {
  current: number;
  maxPage: number;
  onChange: (page: number) => void;
};

export const Pagination: Component<Props> = (props) => {
  const [t] = useI18n();

  const handlePreviousClick = () => {
    props.onChange(props.current - 1);
  };

  const handleNextClick = () => {
    props.onChange(props.current + 1);
  };

  return (
    <div class={classes.container}>
      <button
        class={classes.item}
        disabled={props.current <= 0}
        onClick={handlePreviousClick}
      >
        {t("Pagination.previous")}
      </button>
      {props.current + 1}
      <button
        class={classes.item}
        disabled={props.current >= props.maxPage - 1}
        onClick={handleNextClick}
      >
        {t("Pagination.next")}
      </button>
    </div>
  );
};

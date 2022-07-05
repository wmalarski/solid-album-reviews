import { useI18n } from "@solid-primitives/i18n";
import { Component } from "solid-js";
import * as classes from "./Loading.css";

export const Loading: Component = () => {
  const [t] = useI18n();

  return (
    <div class={classes.container}>
      <span>{t("loading.text")}</span>
    </div>
  );
};

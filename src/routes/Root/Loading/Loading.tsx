import { useI18n } from "@solid-primitives/i18n";
import { Component } from "solid-js";

export const Loading: Component = () => {
  const [t] = useI18n();

  return <span>{t("loading.text")}</span>;
};

import { Button } from "@components/Button/Button";
import { useI18n } from "@solid-primitives/i18n";
import { getMode, saveMode } from "@styles/themeStore";
import { Mode } from "@styles/tokens";
import { BsMoonStars, BsSun } from "solid-icons/bs";
import { Component, createSignal } from "solid-js";

export const ThemeSwitch: Component = () => {
  const [t] = useI18n();

  const [mode, setMode] = createSignal<Mode>(getMode());

  const handleClick = () => {
    const next = mode() === "dark" ? "light" : "dark";
    document.body.setAttribute("data-mode", next);
    setMode(next);
    saveMode(next);
  };

  return (
    <Button onClick={handleClick}>
      {mode() === "dark" ? (
        <BsMoonStars aria-label={t("ThemeSwitch.text")} />
      ) : (
        <BsSun aria-label={t("ThemeSwitch.text")} />
      )}
    </Button>
  );
};

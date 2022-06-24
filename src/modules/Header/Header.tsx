import { nhost } from "@services/nhost";
import { useI18n } from "@solid-primitives/i18n";
import { paths } from "@utils/paths";
import { Link } from "solid-app-router";
import type { Component } from "solid-js";
import * as classes from "./Header.css";

export const Header: Component = () => {
  const [t] = useI18n();

  const handleSignOut = () => {
    nhost.auth.signOut();
  };

  return (
    <header class={classes.container}>
      <Link href={paths.root}>{t("header.title")}</Link>
      <Link href={paths.search}>{t("header.search")}</Link>
      <button onClick={handleSignOut}>{t("header.signOut")}</button>
    </header>
  );
};
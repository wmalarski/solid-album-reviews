import { Button } from "@components/Button/Button";
import { nhost } from "@services/nhost";
import { useI18n } from "@solid-primitives/i18n";
import { paths } from "@utils/paths";
import { Link } from "solid-app-router";
import type { Component } from "solid-js";
import * as classes from "./Header.css";
import { HeaderLink } from "./HeaderLink/HeaderLink";

export const Header: Component = () => {
  const [t] = useI18n();

  const handleSignOut = () => {
    nhost.auth.signOut();
  };

  return (
    <header class={classes.container}>
      <Link class={classes.logo} href={paths.root}>
        {t("header.title")}
      </Link>
      <nav class={classes.navigation}>
        <HeaderLink href={paths.search}>{t("header.search")}</HeaderLink>
        <HeaderLink href={paths.reviews}>{t("header.reviews")}</HeaderLink>
        <Button onClick={handleSignOut}>{t("header.signOut")}</Button>
      </nav>
    </header>
  );
};

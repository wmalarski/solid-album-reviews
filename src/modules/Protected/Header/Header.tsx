import { Link } from "solid-app-router";
import type { Component } from "solid-js";
import { Button } from "~/components/Button/Button";
import { useI18n } from "~/contexts/I18nContext";
import { nhost } from "~/services/nhost";
import { paths } from "~/utils/paths";
import * as classes from "./Header.css";
import { HeaderLink } from "./HeaderLink/HeaderLink";
import { ThemeSwitch } from "./ThemeSwitch/ThemeSwitch";

export const Header: Component = () => {
	const { t } = useI18n();

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
				<ThemeSwitch />
				<Button onClick={handleSignOut}>{t("header.signOut")}</Button>
			</nav>
		</header>
	);
};

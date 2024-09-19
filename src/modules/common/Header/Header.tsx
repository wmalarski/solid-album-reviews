import { A } from "@solidjs/router";
import type { Component } from "solid-js";
import { Button } from "~/components/button";
import { useI18n } from "~/contexts/I18nContext";
import { nhost } from "~/services/nhost";
import { paths } from "~/utils/paths";
import * as classes from "./Header.css";
import { HeaderLink } from "./HeaderLink/HeaderLink";

export const Header: Component = () => {
	const { t } = useI18n();

	const handleSignOut = () => {
		nhost.auth.signOut();
	};

	return (
		<header class={classes.container}>
			<A class={classes.logo} href={paths.root}>
				{t("header.title")}
			</A>
			<nav class={classes.navigation}>
				<HeaderLink href={paths.search}>{t("header.search")}</HeaderLink>
				<HeaderLink href={paths.reviews}>{t("header.reviews")}</HeaderLink>
				<Button onClick={handleSignOut}>{t("header.signOut")}</Button>
			</nav>
		</header>
	);
};

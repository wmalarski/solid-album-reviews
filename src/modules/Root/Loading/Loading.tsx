import type { Component } from "solid-js";
import { useI18n } from "~/contexts/I18nContext";
import * as classes from "./Loading.css";

export const Loading: Component = () => {
	const { t } = useI18n();

	return (
		<div class={classes.container}>
			<span>{t("loading.text")}</span>
		</div>
	);
};

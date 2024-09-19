import type { Component } from "solid-js";
import { useI18n } from "~/contexts/I18nContext";

const NotFound: Component = () => {
	const { t } = useI18n();

	return (
		<div>
			<span>{t("error.notFound")}</span>
		</div>
	);
};

export default NotFound;

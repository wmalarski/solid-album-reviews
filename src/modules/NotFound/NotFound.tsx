import { useI18n } from "@solid-primitives/i18n";
import type { Component } from "solid-js";

const NotFound: Component = () => {
	const [t] = useI18n();

	return (
		<div>
			<span>{t("error.notFound")}</span>
		</div>
	);
};

export default NotFound;

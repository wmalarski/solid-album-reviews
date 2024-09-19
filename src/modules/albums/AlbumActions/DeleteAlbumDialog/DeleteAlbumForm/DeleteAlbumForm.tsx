import type { Component } from "solid-js";
import { Button } from "~/components/Button/Button";
import { FormActions } from "~/components/Form/Form";
import { useI18n } from "~/contexts/I18nContext";
import * as classes from "./DeleteAlbumForm.css";

type DeleteAlbumFormProps = {
	onCancel: () => void;
	onDelete: () => void;
};

export const DeleteAlbumForm: Component<DeleteAlbumFormProps> = (props) => {
	const { t } = useI18n();

	return (
		<FormActions>
			<Button class={classes.submit} onClick={() => props.onCancel()}>
				{t("DeleteAlbumForm.cancel")}
			</Button>
			<Button class={classes.submit} onClick={() => props.onDelete()}>
				{t("DeleteAlbumForm.remove")}
			</Button>
		</FormActions>
	);
};

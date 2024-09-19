import type { Component } from "solid-js";
import { Button } from "~/components/button";
import { useI18n } from "~/contexts/I18nContext";
import * as classes from "./DeleteAlbumForm.css";

type DeleteAlbumFormProps = {
	onDelete: () => void;
};

export const DeleteAlbumForm: Component<DeleteAlbumFormProps> = (props) => {
	const { t } = useI18n();

	return (
		<div>
			{/* <Button class={classes.submit} onClick={() => props.onCancel()}>
				{t("DeleteAlbumForm.cancel")}
			</Button> */}
			<Button class={classes.submit} onClick={() => props.onDelete()}>
				{t("DeleteAlbumForm.remove")}
			</Button>
		</div>
	);
};

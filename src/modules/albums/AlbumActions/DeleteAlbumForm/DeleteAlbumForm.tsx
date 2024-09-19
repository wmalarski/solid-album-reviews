import type { Component } from "solid-js";
import { Button } from "~/components/button";
import { useI18n } from "~/contexts/I18nContext";
import { deleteAlbumAction } from "~/services/album";

type DeleteAlbumFormProps = {
	albumId: string;
};

export const DeleteAlbumForm: Component<DeleteAlbumFormProps> = (props) => {
	const { t } = useI18n();

	return (
		<form action={deleteAlbumAction} method="post">
			<input type="hidden" name="albumId" value={props.albumId} />
			<Button type="submit">{t("DeleteAlbumForm.remove")}</Button>
		</form>
	);
};

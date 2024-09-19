import type { Component } from "solid-js";
import { Button } from "~/components/button";
import { Dialog } from "~/components/dialog";
import { useI18n } from "~/contexts/I18nContext";
import { deleteAlbumAction } from "~/services/album";
import { Stack } from "~/styled-system/jsx";

type DeleteAlbumDialogProps = {
	albumId: string;
};

export const DeleteAlbumDialog: Component<DeleteAlbumDialogProps> = (props) => {
	const { t } = useI18n();

	return (
		<Dialog.Root {...props}>
			<Dialog.Trigger
				asChild={(triggerProps) => (
					<Button {...triggerProps()}>{t("DeleteAlbum.trigger")}</Button>
				)}
			/>
			<Dialog.Backdrop />
			<Dialog.Positioner>
				<Dialog.Content>
					<Stack gap="8" p="6">
						<Stack gap="1">
							<Dialog.Title>{t("DeleteAlbum.delete")}</Dialog.Title>
						</Stack>
						<Stack gap="3" direction="row" width="full">
							<Dialog.CancelTrigger />
							<form action={deleteAlbumAction} method="post">
								<input type="hidden" name="albumId" value={props.albumId} />
								<Button type="submit">{t("common.submit")}</Button>
							</form>
						</Stack>
					</Stack>
					<Dialog.CloseXTrigger />
				</Dialog.Content>
			</Dialog.Positioner>
		</Dialog.Root>
	);
};

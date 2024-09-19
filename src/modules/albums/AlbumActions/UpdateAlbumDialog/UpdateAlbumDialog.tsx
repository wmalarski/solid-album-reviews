import { type Component, createUniqueId } from "solid-js";
import { Button } from "~/components/button";
import { Dialog } from "~/components/dialog";
import { useI18n } from "~/contexts/I18nContext";
import { updateAlbumAction } from "~/services/album";
import type { Album } from "~/store/types";
import { Stack } from "~/styled-system/jsx";
import { AlbumFields } from "../../AlbumFields/AlbumFields";

type UpdateAlbumDialogProps = {
	albumId: string;
	album: Album;
};

export const UpdateAlbumDialog: Component<UpdateAlbumDialogProps> = (props) => {
	const { t } = useI18n();

	const formId = createUniqueId();

	return (
		<Dialog.Root {...props}>
			<Dialog.Trigger
				asChild={(triggerProps) => (
					<Button {...triggerProps()}>{t("UpdateAlbumDialog.trigger")}</Button>
				)}
			/>
			<Dialog.Backdrop />
			<Dialog.Positioner>
				<Dialog.Content>
					<Stack gap="8" p="6">
						<Stack gap="1">
							<Dialog.Title>{t("UpdateAlbumDialog.title")}</Dialog.Title>
							<form id={formId} method="post" action={updateAlbumAction}>
								<input type="hidden" name="albumId" value={props.albumId} />
								<AlbumFields initialAlbum={props.album} />
							</form>
						</Stack>
						<Stack gap="3" direction="row" width="full">
							<Dialog.CancelTrigger />
							<Button form={formId} type="submit" width="full">
								{t("common.submit")}
							</Button>
						</Stack>
					</Stack>
					<Dialog.CloseXTrigger />
				</Dialog.Content>
			</Dialog.Positioner>
		</Dialog.Root>
	);
};

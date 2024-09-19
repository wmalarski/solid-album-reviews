import type { Component } from "solid-js";
import { Button } from "~/components/button";
import { Dialog } from "~/components/dialog";
import { useI18n } from "~/contexts/I18nContext";
import { Stack } from "~/styled-system/jsx";
import { DeleteAlbumForm } from "../DeleteAlbumForm/DeleteAlbumForm";

type DeleteAlbumDialogProps = {
	albumId: string;
	isIcon?: boolean;
};

export const DeleteAlbumDialog: Component<DeleteAlbumDialogProps> = (props) => {
	const { t } = useI18n();

	return (
		<Dialog.Root {...props}>
			<Dialog.Trigger
				asChild={(triggerProps) => (
					<Button {...triggerProps()}>{t("DeleteAlbumDialog.trigger")}</Button>
				)}
			/>
			<Dialog.Backdrop />
			<Dialog.Positioner>
				<Dialog.Content>
					<Stack gap="8" p="6">
						<Stack gap="1">
							<Dialog.Title>{t("DeleteAlbumDialog.title")}</Dialog.Title>
						</Stack>
						<Stack gap="3" direction="row" width="full">
							<Dialog.CloseTrigger
								asChild={(closeTriggerProps) => (
									<Button
										{...closeTriggerProps()}
										variant="outline"
										width="full"
									>
										Cancel
									</Button>
								)}
							/>
							<DeleteAlbumForm albumId={props.albumId} />
						</Stack>
					</Stack>
					<Dialog.CloseXTrigger />
				</Dialog.Content>
			</Dialog.Positioner>
		</Dialog.Root>
	);
};

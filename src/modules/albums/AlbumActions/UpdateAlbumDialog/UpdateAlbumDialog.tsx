import { useAction } from "@solidjs/router";
import type { Component } from "solid-js";
import { Button } from "~/components/button";
import { Dialog } from "~/components/dialog";
import { IconButton } from "~/components/icon-button";
import { useI18n } from "~/contexts/I18nContext";
import { updateAlbumAction } from "~/services/album";
import type { UpdateAlbumArgs } from "~/store/albums";
import { getStoreContext } from "~/store/store";
import { Stack } from "~/styled-system/jsx";
import { UpdateAlbumForm } from "./UpdateAlbumForm/UpdateAlbumForm";

type UpdateAlbumDialogProps = {
	albumId: string;
	isIcon?: boolean;
};

export const UpdateAlbumDialog: Component<UpdateAlbumDialogProps> = (props) => {
	const { t } = useI18n();

	const action = useAction(updateAlbumAction);

	const handleSubmit = async (input: UpdateAlbumArgs) => {
		await action(getStoreContext(), input);
	};

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
							<Dialog.Title>t("UpdateAlbumDialog.title")</Dialog.Title>
							<Dialog.Description>Dialog Description</Dialog.Description>
							<UpdateAlbumForm
								albumId={props.albumId}
								onSubmit={handleSubmit}
							/>
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
							<Button width="full">Confirm</Button>
						</Stack>
					</Stack>
					<Dialog.CloseTrigger
						asChild={(closeTriggerProps) => (
							<IconButton
								{...closeTriggerProps()}
								aria-label="Close Dialog"
								variant="ghost"
								size="sm"
								position="absolute"
								top="2"
								right="2"
							>
								X
							</IconButton>
						)}
					/>
				</Dialog.Content>
			</Dialog.Positioner>
		</Dialog.Root>
	);
};

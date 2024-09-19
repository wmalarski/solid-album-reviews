import { createButton } from "@solid-aria/button";
import {
	OverlayContainer,
	createOverlayTriggerState,
} from "@solid-aria/overlays";
import { useAction } from "@solidjs/router";
import { BsPencilSquare } from "solid-icons/bs";
import { type Component, Show } from "solid-js";
import { Dialog } from "~/components/Dialog/Dialog";
import { Button } from "~/components/button";
import { useI18n } from "~/contexts/I18nContext";
import { updateAlbumAction } from "~/services/album";
import type { UpdateAlbumArgs } from "~/store/albums";
import { getStoreContext } from "~/store/store";
import { getPortalContainer } from "~/utils/getPortalContainer";
import { UpdateAlbumForm } from "./UpdateAlbumForm/UpdateAlbumForm";

type UpdateAlbumDialogProps = {
	albumId: string;
	isIcon?: boolean;
};

export const UpdateAlbumDialog: Component<UpdateAlbumDialogProps> = (props) => {
	const { t } = useI18n();

	let openButtonRef: HTMLButtonElement | undefined;

	const state = createOverlayTriggerState({});

	const { buttonProps: openButtonProps } = createButton(
		{ onPress: () => state.open() },
		() => openButtonRef,
	);

	const action = useAction(updateAlbumAction);

	const handleSubmit = async (input: UpdateAlbumArgs) => {
		await action(getStoreContext(), input);
		state.close();
	};

	return (
		<>
			<Button
				{...openButtonProps}
				ref={openButtonRef}
				aria-label={t("UpdateAlbumDialog.trigger")}
			>
				{props.isIcon ? (
					<BsPencilSquare size={20} />
				) : (
					t("UpdateAlbumDialog.trigger")
				)}
			</Button>
			<Show when={state.isOpen()}>
				<OverlayContainer portalContainer={getPortalContainer()}>
					<Dialog
						isDismissable
						isOpen
						onClose={state.close}
						title={t("UpdateAlbumDialog.title")}
					>
						<UpdateAlbumForm
							albumId={props.albumId}
							onClose={state.close}
							onSubmit={handleSubmit}
						/>
					</Dialog>
				</OverlayContainer>
			</Show>
		</>
	);
};

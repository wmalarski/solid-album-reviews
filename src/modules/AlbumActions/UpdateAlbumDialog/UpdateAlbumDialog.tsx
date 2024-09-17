import { createButton } from "@solid-aria/button";
import {
	OverlayContainer,
	createOverlayTriggerState,
} from "@solid-aria/overlays";
import { BsPencilSquare } from "solid-icons/bs";
import { type Component, Show } from "solid-js";
import { Button } from "~/components/Button/Button";
import { Dialog } from "~/components/Dialog/Dialog";
import { useI18n } from "~/contexts/I18nContext";
import { graphqlSdk } from "~/services/fetcher";
import type { AlbumSetInput } from "~/services/types";
import type { Album } from "~/store/types";
import { getPortalContainer } from "~/utils/getPortalContainer";
import { UpdateAlbumForm } from "./UpdateAlbumForm/UpdateAlbumForm";

type UpdateAlbumDialogProps = {
	albumId: string;
	album: Album;
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

	const handleSubmit = async (input: AlbumSetInput) => {
		await graphqlSdk.UpdateAlbum({ id: props.albumId, input });
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
							initialAlbum={props.album}
							onClose={state.close}
							onSubmit={handleSubmit}
						/>
					</Dialog>
				</OverlayContainer>
			</Show>
		</>
	);
};

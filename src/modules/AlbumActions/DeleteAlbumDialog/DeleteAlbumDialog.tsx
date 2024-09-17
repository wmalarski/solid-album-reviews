import { createButton } from "@solid-aria/button";
import {
	OverlayContainer,
	createOverlayTriggerState,
} from "@solid-aria/overlays";
import { BsTrash } from "solid-icons/bs";
import { type Component, Show } from "solid-js";
import { Button } from "~/components/Button/Button";
import { Dialog } from "~/components/Dialog/Dialog";
import { useI18n } from "~/contexts/I18nContext";
import { graphqlSdk } from "~/services/fetcher";
import { getPortalContainer } from "~/utils/getPortalContainer";
import { DeleteAlbumForm } from "./DeleteAlbumForm/DeleteAlbumForm";

type Props = {
	albumId: string;
	onSuccess: () => void;
	isIcon?: boolean;
};

export const DeleteAlbumDialog: Component<Props> = (props) => {
	const { t } = useI18n();

	let openButtonRef: HTMLButtonElement | undefined;

	const state = createOverlayTriggerState({});

	const { buttonProps: openButtonProps } = createButton(
		{ onPress: () => state.open() },
		() => openButtonRef,
	);

	const handleSubmit = async () => {
		await graphqlSdk.DeleteAlbum({ id: props.albumId });
		state.close();
		props.onSuccess();
	};

	return (
		<>
			<Button
				{...openButtonProps}
				ref={openButtonRef}
				aria-label={t("DeleteAlbumDialog.trigger")}
			>
				{props.isIcon ? <BsTrash size={20} /> : t("DeleteAlbumDialog.trigger")}
			</Button>
			<Show when={state.isOpen()}>
				<OverlayContainer portalContainer={getPortalContainer()}>
					<Dialog
						isDismissable
						isOpen
						onClose={state.close}
						title={t("DeleteAlbumDialog.title")}
					>
						<DeleteAlbumForm onCancel={state.close} onDelete={handleSubmit} />
					</Dialog>
				</OverlayContainer>
			</Show>
		</>
	);
};

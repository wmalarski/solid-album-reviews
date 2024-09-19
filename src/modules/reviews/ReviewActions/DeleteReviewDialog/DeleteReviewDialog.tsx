import { createButton } from "@solid-aria/button";
import {
	OverlayContainer,
	createOverlayTriggerState,
} from "@solid-aria/overlays";
import { useAction } from "@solidjs/router";
import { type Component, Show } from "solid-js";
import { Dialog } from "~/components/Dialog/Dialog";
import { Button } from "~/components/button";
import { useI18n } from "~/contexts/I18nContext";
import { deleteReviewAction } from "~/services/review";
import { getStoreContext } from "~/store/store";
import { getPortalContainer } from "~/utils/getPortalContainer";
import { DeleteReviewForm } from "./DeleteReviewForm/DeleteReviewForm";

type DeleteReviewDialogProps = {
	reviewId: string;
};

export const DeleteReviewDialog: Component<DeleteReviewDialogProps> = (
	props,
) => {
	const { t } = useI18n();

	let openButtonRef: HTMLButtonElement | undefined;

	const state = createOverlayTriggerState({});

	const action = useAction(deleteReviewAction);

	const { buttonProps: openButtonProps } = createButton(
		{ onPress: () => state.open() },
		() => openButtonRef,
	);

	const handleSubmit = async () => {
		await action(getStoreContext(), { reviewId: props.reviewId });
		state.close();
	};

	return (
		<>
			<Button {...openButtonProps} ref={openButtonRef}>
				{t("DeleteReviewDialog.trigger")}
			</Button>
			<Show when={state.isOpen()}>
				<OverlayContainer portalContainer={getPortalContainer()}>
					<Dialog
						isDismissable
						isOpen
						onClose={state.close}
						title={t("DeleteReviewDialog.title")}
					>
						<DeleteReviewForm onCancel={state.close} onDelete={handleSubmit} />
					</Dialog>
				</OverlayContainer>
			</Show>
		</>
	);
};

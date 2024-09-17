import { createButton } from "@solid-aria/button";
import {
	OverlayContainer,
	createOverlayTriggerState,
} from "@solid-aria/overlays";
import { type Component, Show } from "solid-js";
import { Button } from "~/components/Button/Button";
import { Dialog } from "~/components/Dialog/Dialog";
import { useI18n } from "~/contexts/I18nContext";
import { graphqlSdk } from "~/services/fetcher";
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

	const { buttonProps: openButtonProps } = createButton(
		{ onPress: () => state.open() },
		() => openButtonRef,
	);

	const handleSubmit = async () => {
		await graphqlSdk.DeleteReview({ id: props.reviewId });
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

import { createButton } from "@solid-aria/button";
import {
	OverlayContainer,
	createOverlayTriggerState,
} from "@solid-aria/overlays";
import { type Component, Show } from "solid-js";
import { Button } from "~/components/Button/Button";
import { Dialog } from "~/components/Dialog/Dialog";
import { useI18n } from "~/contexts/I18nContext";
import { ReviewForm } from "~/modules/ReviewForm/ReviewForm";
import { graphqlSdk } from "~/services/fetcher";
import type { ReviewSetInput } from "~/services/types";
import type { Review } from "~/store/types";
import { getPortalContainer } from "~/utils/getPortalContainer";

type UpdateReviewDialogProps = {
	reviewId: string;
	review: Review;
};

export const UpdateReviewDialog: Component<UpdateReviewDialogProps> = (
	props,
) => {
	const { t } = useI18n();

	let openButtonRef: HTMLButtonElement | undefined;

	const state = createOverlayTriggerState({});

	const { buttonProps: openButtonProps } = createButton(
		{ onPress: () => state.open() },
		() => openButtonRef,
	);

	const handleSubmit = async (input: ReviewSetInput) => {
		await graphqlSdk.UpdateReview({ id: props.reviewId, input });
		state.close();
	};

	return (
		<>
			<Button {...openButtonProps} ref={openButtonRef}>
				{t("UpdateReviewDialog.trigger")}
			</Button>
			<Show when={state.isOpen()}>
				<OverlayContainer portalContainer={getPortalContainer()}>
					<Dialog
						isDismissable
						isOpen
						onClose={state.close}
						title={t("UpdateReviewDialog.title")}
					>
						<ReviewForm
							initialReview={props.review}
							onClose={state.close}
							onSubmit={handleSubmit}
						/>
					</Dialog>
				</OverlayContainer>
			</Show>
		</>
	);
};

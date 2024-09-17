import { Button } from "@components/Button/Button";
import { Dialog } from "@components/Dialog/Dialog";
import { ReviewForm } from "@modules/ReviewForm/ReviewForm";
import { graphqlSdk } from "@services/fetcher";
import type { ReviewFragment, ReviewSetInput } from "@services/types";
import { createButton } from "@solid-aria/button";
import {
	OverlayContainer,
	createOverlayTriggerState,
} from "@solid-aria/overlays";
import { getPortalContainer } from "@utils/getPortalContainer";
import { type Component, Show } from "solid-js";
import { useI18n } from "~/contexts/I18nContext";

type Props = {
	review: ReviewFragment;
	onSuccess: () => void;
};

export const UpdateReviewDialog: Component<Props> = (props) => {
	const { t } = useI18n();

	let openButtonRef: HTMLButtonElement | undefined;

	const state = createOverlayTriggerState({});

	const { buttonProps: openButtonProps } = createButton(
		{ onPress: () => state.open() },
		() => openButtonRef,
	);

	const handleSubmit = async (input: ReviewSetInput) => {
		await graphqlSdk.UpdateReview({ id: props.review.id, input });
		state.close();
		props.onSuccess();
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

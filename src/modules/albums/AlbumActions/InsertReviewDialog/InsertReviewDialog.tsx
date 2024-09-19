import { createButton } from "@solid-aria/button";
import {
	OverlayContainer,
	createOverlayTriggerState,
} from "@solid-aria/overlays";
import { useAction } from "@solidjs/router";
import { BsChatLeftText } from "solid-icons/bs";
import { type Component, Show } from "solid-js";
import { Dialog } from "~/components/Dialog/Dialog";
import { Button } from "~/components/button";
import { useI18n } from "~/contexts/I18nContext";
import { ReviewForm } from "~/modules/reviews/ReviewForm/ReviewForm";
import { createReviewAction } from "~/services/review";
import type { CreateReviewArgs } from "~/store/reviews";
import { getStoreContext } from "~/store/store";
import { getPortalContainer } from "~/utils/getPortalContainer";

type InsertReviewDialogProps = {
	albumId: string;
	isIcon?: boolean;
};

export const InsertReviewDialog: Component<InsertReviewDialogProps> = (
	props,
) => {
	const { t } = useI18n();

	let openButtonRef: HTMLButtonElement | undefined;

	const action = useAction(createReviewAction);

	const state = createOverlayTriggerState({});

	const { buttonProps: openButtonProps } = createButton(
		{ onPress: () => state.open() },
		() => openButtonRef,
	);

	const handleSubmit = async (input: CreateReviewArgs) => {
		const review = { ...input, album: props.albumId };
		await action(getStoreContext(), review);
		state.close();
	};

	return (
		<>
			<Button
				{...openButtonProps}
				ref={openButtonRef}
				aria-label={t("InsertReviewDialog.trigger")}
			>
				{props.isIcon ? (
					<BsChatLeftText size={20} />
				) : (
					t("InsertReviewDialog.trigger")
				)}
			</Button>
			<Show when={state.isOpen()}>
				<OverlayContainer portalContainer={getPortalContainer()}>
					<Dialog
						isDismissable
						isOpen
						onClose={state.close}
						title={t("InsertReviewDialog.title")}
					>
						<ReviewForm onClose={state.close} onSubmit={handleSubmit} />
					</Dialog>
				</OverlayContainer>
			</Show>
		</>
	);
};

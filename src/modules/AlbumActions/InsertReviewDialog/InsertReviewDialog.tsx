import { createButton } from "@solid-aria/button";
import {
	OverlayContainer,
	createOverlayTriggerState,
} from "@solid-aria/overlays";
import { BsChatLeftText } from "solid-icons/bs";
import { type Component, Show } from "solid-js";
import { Button } from "~/components/Button/Button";
import { Dialog } from "~/components/Dialog/Dialog";
import { useI18n } from "~/contexts/I18nContext";
import { ReviewForm } from "~/modules/ReviewForm/ReviewForm";
import { graphqlSdk } from "~/services/fetcher";
import type { ReviewInsertInput } from "~/services/types";
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

	const state = createOverlayTriggerState({});

	const { buttonProps: openButtonProps } = createButton(
		{ onPress: () => state.open() },
		() => openButtonRef,
	);

	const handleSubmit = async (input: ReviewInsertInput) => {
		const review = { ...input, album: props.albumId };
		await graphqlSdk.InsertReview({ review });
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

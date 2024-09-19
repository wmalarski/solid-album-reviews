import { useAction } from "@solidjs/router";
import type { Component } from "solid-js";
import { Button } from "~/components/button";
import { Dialog } from "~/components/dialog";
import { IconButton } from "~/components/icon-button";
import { useI18n } from "~/contexts/I18nContext";
import { ReviewForm } from "~/modules/reviews/ReviewForm/ReviewForm";
import { updateReviewAction } from "~/services/review";
import type { UpdateReviewArgs } from "~/store/reviews";
import { getStoreContext } from "~/store/store";
import type { Review } from "~/store/types";
import { Stack } from "~/styled-system/jsx";

type UpdateReviewDialogProps = {
	reviewId: string;
	review: Review;
};

export const UpdateReviewDialog: Component<UpdateReviewDialogProps> = (
	props,
) => {
	const { t } = useI18n();

	const action = useAction(updateReviewAction);

	const handleSubmit = async (input: UpdateReviewArgs) => {
		await action(getStoreContext(), input);
	};

	return (
		<Dialog.Root {...props}>
			<Dialog.Trigger
				asChild={(triggerProps) => (
					<Button {...triggerProps()}>{t("UpdateReviewDialog.trigger")}</Button>
				)}
			/>
			<Dialog.Backdrop />
			<Dialog.Positioner>
				<Dialog.Content>
					<Stack gap="8" p="6">
						<Stack gap="1">
							<Dialog.Title>Dialog Title</Dialog.Title>
							<Dialog.Description>Dialog Description</Dialog.Description>
							<ReviewForm
								initialReview={props.review}
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

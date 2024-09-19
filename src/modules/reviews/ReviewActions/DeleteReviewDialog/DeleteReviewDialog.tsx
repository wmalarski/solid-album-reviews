import type { Component } from "solid-js";
import { Button } from "~/components/button";
import { Dialog } from "~/components/dialog";
import { useI18n } from "~/contexts/I18nContext";
import { Stack } from "~/styled-system/jsx";
import { DeleteReviewForm } from "../DeleteReviewForm/DeleteReviewForm";

type DeleteReviewDialogProps = {
	reviewId: string;
};

export const DeleteReviewDialog: Component<DeleteReviewDialogProps> = (
	props,
) => {
	const { t } = useI18n();

	return (
		<Dialog.Root {...props}>
			<Dialog.Trigger
				asChild={(triggerProps) => (
					<Button {...triggerProps()}>{t("DeleteReviewDialog.trigger")}</Button>
				)}
			/>
			<Dialog.Backdrop />
			<Dialog.Positioner>
				<Dialog.Content>
					<Stack gap="8" p="6">
						<Stack gap="1">
							<Dialog.Title>Dialog Title</Dialog.Title>
							<Dialog.Description>Dialog Description</Dialog.Description>
						</Stack>
						<Stack gap="3" direction="row" width="full">
							<Dialog.CancelTrigger />
							<DeleteReviewForm reviewId={props.reviewId} />
						</Stack>
					</Stack>
					<Dialog.CloseXTrigger />
				</Dialog.Content>
			</Dialog.Positioner>
		</Dialog.Root>
	);
};

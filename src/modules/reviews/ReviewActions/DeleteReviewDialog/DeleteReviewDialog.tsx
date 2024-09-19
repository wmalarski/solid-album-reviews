import type { Component } from "solid-js";
import { Button } from "~/components/button";
import { Dialog } from "~/components/dialog";
import { useI18n } from "~/contexts/I18nContext";
import { deleteReviewAction } from "~/services/review";
import { Stack } from "~/styled-system/jsx";

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
							<Dialog.Title>{t("DeleteReviewDialog.title")}</Dialog.Title>
						</Stack>
						<Stack gap="3" direction="row" width="full">
							<Dialog.CancelTrigger />
							<form action={deleteReviewAction} method="post">
								<input type="hidden" name="reviewId" value={props.reviewId} />
								<Button type="submit">{t("DeleteReviewForm.remove")}</Button>
							</form>
						</Stack>
					</Stack>
					<Dialog.CloseXTrigger />
				</Dialog.Content>
			</Dialog.Positioner>
		</Dialog.Root>
	);
};

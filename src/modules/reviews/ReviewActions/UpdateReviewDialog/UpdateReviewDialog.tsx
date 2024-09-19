import { type Component, createUniqueId } from "solid-js";
import { Button } from "~/components/button";
import { Dialog } from "~/components/dialog";
import { useI18n } from "~/contexts/I18nContext";
import { updateReviewAction } from "~/services/review";
import type { Review } from "~/store/types";
import { Stack } from "~/styled-system/jsx";
import { ReviewFields } from "../../ReviewFields/ReviewFields";

type UpdateReviewDialogProps = {
	reviewId: string;
	review: Review;
};

export const UpdateReviewDialog: Component<UpdateReviewDialogProps> = (
	props,
) => {
	const { t } = useI18n();

	const formId = createUniqueId();

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
							<Dialog.Title>{t("UpdateReviewDialog.title")}</Dialog.Title>
							<form id={formId} method="post" action={updateReviewAction}>
								<input type="hidden" name="reviewId" value={props.reviewId} />
								<ReviewFields initialReview={props.review} />
							</form>
						</Stack>
						<Stack gap="3" direction="row" width="full">
							<Dialog.CancelTrigger />
							<Button form={formId} type="submit" width="full">
								{t("common.submit")}
							</Button>
						</Stack>
					</Stack>
					<Dialog.CloseXTrigger />
				</Dialog.Content>
			</Dialog.Positioner>
		</Dialog.Root>
	);
};

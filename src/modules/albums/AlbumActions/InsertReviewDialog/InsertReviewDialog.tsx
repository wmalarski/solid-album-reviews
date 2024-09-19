import { type Component, createUniqueId } from "solid-js";
import { Button } from "~/components/button";
import { Dialog } from "~/components/dialog";
import { useI18n } from "~/contexts/I18nContext";
import { ReviewFields } from "~/modules/reviews/ReviewFields/ReviewFields";
import { createReviewAction } from "~/services/review";
import { Stack } from "~/styled-system/jsx";

type InsertReviewDialogProps = {
	albumId: string;
};

export const InsertReviewDialog: Component<InsertReviewDialogProps> = (
	props,
) => {
	const { t } = useI18n();

	const formId = createUniqueId();

	return (
		<Dialog.Root {...props}>
			<Dialog.Trigger
				asChild={(triggerProps) => (
					<Button {...triggerProps()}>{t("InsertReviewDialog.trigger")}</Button>
				)}
			/>
			<Dialog.Backdrop />
			<Dialog.Positioner>
				<Dialog.Content>
					<Stack gap="8" p="6">
						<Stack gap="1">
							<Dialog.Title>{t("InsertReviewDialog.title")}</Dialog.Title>
							<form id={formId} method="post" action={createReviewAction}>
								<input type="hidden" name="albumId" value={props.albumId} />
								<ReviewFields />
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

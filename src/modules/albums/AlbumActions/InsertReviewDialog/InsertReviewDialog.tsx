import { useAction } from "@solidjs/router";
import type { Component } from "solid-js";
import { Button } from "~/components/button";
import { Dialog } from "~/components/dialog";
import { IconButton } from "~/components/icon-button";
import { useI18n } from "~/contexts/I18nContext";
import { ReviewForm } from "~/modules/reviews/ReviewForm/ReviewForm";
import { createReviewAction } from "~/services/review";
import type { CreateReviewArgs } from "~/store/reviews";
import { getStoreContext } from "~/store/store";
import { Stack } from "~/styled-system/jsx";

type InsertReviewDialogProps = {
	albumId: string;
	isIcon?: boolean;
};

export const InsertReviewDialog: Component<InsertReviewDialogProps> = (
	props,
) => {
	const { t } = useI18n();

	const action = useAction(createReviewAction);

	const handleSubmit = async (input: CreateReviewArgs) => {
		const review = { ...input, album: props.albumId };
		await action(getStoreContext(), review);
	};

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
							<Dialog.Description>Dialog Description</Dialog.Description>
							<ReviewForm onSubmit={handleSubmit} />
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

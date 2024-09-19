import type { Component } from "solid-js";
import { Button } from "~/components/button";
import { useI18n } from "~/contexts/I18nContext";
import { deleteReviewAction } from "~/services/review";

type DeleteReviewFormProps = {
	reviewId: string;
};

export const DeleteReviewForm: Component<DeleteReviewFormProps> = (props) => {
	const { t } = useI18n();

	return (
		<form action={deleteReviewAction} method="post">
			<input type="hidden" name="reviewId" value={props.reviewId} />
			<Button type="submit">{t("DeleteReviewForm.remove")}</Button>
		</form>
	);
};

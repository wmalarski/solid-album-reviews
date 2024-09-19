import type { Component } from "solid-js";
import { FormActions } from "~/components/Form/Form";
import { Button } from "~/components/button";
import { useI18n } from "~/contexts/I18nContext";
import * as classes from "./DeleteReviewForm.css";

type DeleteReviewFormProps = {
	onDelete: () => void;
};

export const DeleteReviewForm: Component<DeleteReviewFormProps> = (props) => {
	const { t } = useI18n();

	return (
		<FormActions>
			{/* <Button class={classes.submit} onClick={() => props.onCancel()}>
				{t("DeleteReviewForm.cancel")}
			</Button> */}
			<Button class={classes.submit} onClick={() => props.onDelete()}>
				{t("DeleteReviewForm.remove")}
			</Button>
		</FormActions>
	);
};

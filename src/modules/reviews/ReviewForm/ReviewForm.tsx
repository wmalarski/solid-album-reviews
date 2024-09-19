import { type Component, createSignal } from "solid-js";
import { Form, FormActions, FormLabel } from "~/components/Form/Form";
import { Button } from "~/components/button";
import { Input } from "~/components/input";
import { useI18n } from "~/contexts/I18nContext";
import type { Review } from "~/store/types";
import * as classes from "./ReviewForm.css";

type ReviewFormData = {
	text: string;
	rate: number;
};

type ReviewFormProps = {
	initialReview?: Review;
	onSubmit: (input: ReviewFormData) => void;
};

export const ReviewForm: Component<ReviewFormProps> = (props) => {
	const { t } = useI18n();

	const [text, setText] = createSignal(props.initialReview?.text || "");
	const [rate, setRate] = createSignal(props.initialReview?.rate || 0);

	const handleSubmit = (event: Event) => {
		event.preventDefault();
		props.onSubmit({ rate: rate(), text: text() });
	};

	return (
		<Form class={classes.container} onSubmit={handleSubmit}>
			<FormLabel>
				{t("ReviewForm.textLabel")}
				<Input
					value={text()}
					onChange={(event) => setText(event.currentTarget.value)}
				/>
			</FormLabel>
			<FormLabel>
				{t("ReviewForm.rateLabel")}
				<Input
					type="number"
					min={0}
					max={10}
					step={0.1}
					value={rate()}
					onChange={(event) => setRate(Number(event.currentTarget.value))}
				/>
			</FormLabel>
			<FormActions>
				<Button type="submit" class={classes.submit}>
					{t("ReviewForm.submit")}
				</Button>
			</FormActions>
		</Form>
	);
};

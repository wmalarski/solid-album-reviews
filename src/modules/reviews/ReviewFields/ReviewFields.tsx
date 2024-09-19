import type { Component } from "solid-js";
import { FormLabel } from "~/components/form-label";
import { Input } from "~/components/input";
import { useI18n } from "~/contexts/I18nContext";
import type { Review } from "~/store/types";
import { Flex } from "~/styled-system/jsx";

type ReviewFieldsProps = {
	initialReview?: Review;
};

export const ReviewFields: Component<ReviewFieldsProps> = (props) => {
	const { t } = useI18n();

	return (
		<Flex flexDirection="column" padding="4">
			<FormLabel>
				{t("ReviewForm.textLabel")}
				<Input name="text" value={props.initialReview?.text ?? ""} />
			</FormLabel>
			<FormLabel>
				{t("ReviewForm.rateLabel")}
				<Input
					name="rate"
					type="number"
					min={0}
					max={10}
					step={0.1}
					value={props.initialReview?.rate ?? 5}
				/>
			</FormLabel>
		</Flex>
	);
};

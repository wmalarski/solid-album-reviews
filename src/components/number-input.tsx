import { Show, children } from "solid-js";
import { ChevronDownIcon } from "./icons/chevron-down-icon";
import { ChevronUpIcon } from "./icons/chevron-up-icon";
import * as StyledNumberInput from "./styled/number-input";

export interface NumberInputProps extends StyledNumberInput.RootProps {}

export const NumberInput = (props: NumberInputProps) => {
	const getChildren = children(() => props.children);

	return (
		<StyledNumberInput.Root {...props}>
			<Show when={getChildren()}>
				<StyledNumberInput.Label>{getChildren()}</StyledNumberInput.Label>
			</Show>
			<StyledNumberInput.Control>
				<StyledNumberInput.Input />
				<StyledNumberInput.IncrementTrigger>
					<ChevronUpIcon />
				</StyledNumberInput.IncrementTrigger>
				<StyledNumberInput.DecrementTrigger>
					<ChevronDownIcon />
				</StyledNumberInput.DecrementTrigger>
			</StyledNumberInput.Control>
		</StyledNumberInput.Root>
	);
};

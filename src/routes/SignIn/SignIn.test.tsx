import { type PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import type { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import SignIn from "./SignIn";

type Props = ComponentProps<typeof SignIn>;

const renderComponent = ({
	wrapperProps,
	...props
}: PropsWithTestWrapper<Props> = {}) => {
	const defaultProps: Props = {};
	return render(() => (
		<TestWrapper {...wrapperProps}>
			<SignIn {...defaultProps} {...props} />
		</TestWrapper>
	));
};

describe("<SignIn />", () => {
	test("renders", async () => {
		const { unmount } = renderComponent();
		await expect(screen.findByAltText("SignIn")).resolves.toBeDefined();
		unmount();
	});
});

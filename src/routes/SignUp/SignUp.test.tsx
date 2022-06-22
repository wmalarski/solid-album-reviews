import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import SignUp from "./SignUp";

type Props = ComponentProps<typeof SignUp>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {};
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <SignUp {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<SignUp />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(screen.findByAltText("SignUp")).resolves.toBeDefined();
    unmount();
  });
});

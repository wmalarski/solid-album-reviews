import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { SignUpForm } from "./SignUpForm";

type Props = ComponentProps<typeof SignUpForm>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {
    onSubmit: () => void 0,
    error: null,
  };
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <SignUpForm {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<SignUpForm />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(screen.findByAltText("SignUpForm")).resolves.toBeDefined();
    unmount();
  });
});

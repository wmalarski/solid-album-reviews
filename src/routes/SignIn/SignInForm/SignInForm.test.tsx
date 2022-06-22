import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { SignInForm } from "./SignInForm";

type Props = ComponentProps<typeof SignInForm>;

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
      <SignInForm {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<SignInForm />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(screen.findByAltText("SignInForm")).resolves.toBeDefined();
    unmount();
  });
});

import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { GoogleRedirectButton } from "./GoogleRedirectButton";

type Props = ComponentProps<typeof GoogleRedirectButton>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {};
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <GoogleRedirectButton {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<GoogleRedirectButton />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(screen.findByAltText("GoogleRedirectButton")).resolves.toBeDefined();
    unmount();
  });
});

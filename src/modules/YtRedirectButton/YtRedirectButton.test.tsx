import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { YtRedirectButton } from "./YtRedirectButton";

type Props = ComponentProps<typeof YtRedirectButton>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {};
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <YtRedirectButton {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<YtRedirectButton />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(screen.findByAltText("YtRedirectButton")).resolves.toBeDefined();
    unmount();
  });
});

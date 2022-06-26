import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { ReviewActions } from "./ReviewActions";

type Props = ComponentProps<typeof ReviewActions>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {};
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <ReviewActions {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<ReviewActions />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(screen.findByAltText("ReviewActions")).resolves.toBeDefined();
    unmount();
  });
});

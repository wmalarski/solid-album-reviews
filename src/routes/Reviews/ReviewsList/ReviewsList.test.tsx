import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { ReviewsList } from "./ReviewsList";

type Props = ComponentProps<typeof ReviewsList>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {};
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <ReviewsList {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<ReviewsList />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(screen.findByAltText("ReviewsList")).resolves.toBeDefined();
    unmount();
  });
});

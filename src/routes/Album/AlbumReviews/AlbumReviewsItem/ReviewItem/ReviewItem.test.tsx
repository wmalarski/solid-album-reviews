import { mockReviewFragment } from "@tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { ReviewItem } from "./ReviewItem";

type Props = ComponentProps<typeof ReviewItem>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {
    onReviewChange: () => void 0,
    review: mockReviewFragment(),
  };
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <ReviewItem {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<ReviewItem />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(screen.findByAltText("ReviewItem")).resolves.toBeDefined();
    unmount();
  });
});

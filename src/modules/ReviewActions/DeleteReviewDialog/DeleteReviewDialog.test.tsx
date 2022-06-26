import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { DeleteReviewDialog } from "./DeleteReviewDialog";

type Props = ComponentProps<typeof DeleteReviewDialog>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {
    onSuccess: () => void 0,
    reviewId: 1,
  };
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <DeleteReviewDialog {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<DeleteReviewDialog />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(
      screen.findByAltText("DeleteReviewDialog")
    ).resolves.toBeDefined();
    unmount();
  });
});

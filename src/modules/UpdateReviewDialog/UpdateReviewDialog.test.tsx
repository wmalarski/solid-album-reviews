import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { UpdateReviewDialog } from "./UpdateReviewDialog";

type Props = ComponentProps<typeof UpdateReviewDialog>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {};
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <UpdateReviewDialog {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<UpdateReviewDialog />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(screen.findByAltText("UpdateReviewDialog")).resolves.toBeDefined();
    unmount();
  });
});

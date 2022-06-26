import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { DeleteReviewForm } from "./DeleteReviewForm";

type Props = ComponentProps<typeof DeleteReviewForm>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {
    onCancel: () => void 0,
    onDelete: () => void 0,
  };
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <DeleteReviewForm {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<DeleteReviewForm />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(
      screen.findByAltText("DeleteReviewForm")
    ).resolves.toBeDefined();
    unmount();
  });
});

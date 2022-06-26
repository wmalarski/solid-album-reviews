import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { InsertReviewDialog } from "./InsertReviewDialog";

type Props = ComponentProps<typeof InsertReviewDialog>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {
    albumId: 1,
  };
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <InsertReviewDialog {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<InsertReviewDialog />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(
      screen.findByAltText("InsertReviewDialog")
    ).resolves.toBeDefined();
    unmount();
  });
});

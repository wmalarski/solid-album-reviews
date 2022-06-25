import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { ReviewDialog } from "./ReviewDialog";

type Props = ComponentProps<typeof ReviewDialog>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {};
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <ReviewDialog {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<ReviewDialog />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(screen.findByAltText("ReviewDialog")).resolves.toBeDefined();
    unmount();
  });
});

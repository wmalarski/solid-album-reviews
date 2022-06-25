import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { ReviewForm } from "./ReviewForm";

type Props = ComponentProps<typeof ReviewForm>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {
    onClose: () => void 0,
    onSubmit: () => void 0,
  };
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <ReviewForm {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<ReviewForm />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(screen.findByAltText("ReviewForm")).resolves.toBeDefined();
    unmount();
  });
});

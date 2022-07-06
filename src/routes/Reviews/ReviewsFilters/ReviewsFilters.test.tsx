import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { ReviewsFilters } from "./ReviewsFilters";

type Props = ComponentProps<typeof ReviewsFilters>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {
    args: { lower: 0, query: "", upper: 1 },
    onArgsChange: () => void 0,
  };
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <ReviewsFilters {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<ReviewsFilters />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(screen.findByAltText("ReviewsFilters")).resolves.toBeDefined();
    unmount();
  });
});

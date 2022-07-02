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
    onQueryChange: () => void 0,
    onRangeChange: () => void 0,
    query: "",
    args: { lower: 0, upper: 1 },
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

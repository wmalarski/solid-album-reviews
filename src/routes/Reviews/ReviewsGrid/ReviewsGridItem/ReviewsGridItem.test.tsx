import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { ReviewsGridItem } from "./ReviewsGridItem";

type Props = ComponentProps<typeof ReviewsGridItem>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {
    data: {
      date: new Date(),
      item: {},
      scale: 0,
    },
  };
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <ReviewsGridItem {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<ReviewsGridItem />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(
      screen.findByAltText("ReviewsGridItem")
    ).resolves.toBeDefined();
    unmount();
  });
});

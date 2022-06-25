import { mockReviewWithAlbumAndArtistFragment } from "@tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { ReviewsListItem } from "./ReviewsListItem";

type Props = ComponentProps<typeof ReviewsListItem>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {
    review: mockReviewWithAlbumAndArtistFragment(),
  };
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <ReviewsListItem {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<ReviewsListItem />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(
      screen.findByAltText("ReviewsListItem")
    ).resolves.toBeDefined();
    unmount();
  });
});

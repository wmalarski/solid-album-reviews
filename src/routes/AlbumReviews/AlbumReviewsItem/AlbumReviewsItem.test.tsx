import {
  mockAlbumWithArtistFragment,
  mockAlbumWithReviewsFragment,
} from "@tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { AlbumReviewsItem } from "./AlbumReviewsItem";

type Props = ComponentProps<typeof AlbumReviewsItem>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {
    album: {
      ...mockAlbumWithReviewsFragment(),
      ...mockAlbumWithArtistFragment(),
    },
    isCurrent: true,
  };
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <AlbumReviewsItem {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<AlbumReviewsItem />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(
      screen.findByAltText("AlbumReviewsItem")
    ).resolves.toBeDefined();
    unmount();
  });
});

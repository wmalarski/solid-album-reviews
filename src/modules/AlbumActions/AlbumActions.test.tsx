import { mockAlbumWithArtistFragment } from "@tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { AlbumActions } from "./AlbumActions";

type Props = ComponentProps<typeof AlbumActions>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {
    album: mockAlbumWithArtistFragment(),
  };
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <AlbumActions {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<AlbumActions />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(screen.findByAltText("AlbumActions")).resolves.toBeDefined();
    unmount();
  });
});

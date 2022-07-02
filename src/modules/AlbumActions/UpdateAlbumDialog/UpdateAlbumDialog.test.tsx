import { mockAlbumWithArtistFragment } from "@tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { UpdateAlbumDialog } from "./UpdateAlbumDialog";

type Props = ComponentProps<typeof UpdateAlbumDialog>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {
    album: mockAlbumWithArtistFragment(),
    onSuccess: () => void 0,
  };
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <UpdateAlbumDialog {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<UpdateAlbumDialog />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(
      screen.findByAltText("UpdateAlbumDialog")
    ).resolves.toBeDefined();
    unmount();
  });
});

import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { DeleteAlbumDialog } from "./DeleteAlbumDialog";

type Props = ComponentProps<typeof DeleteAlbumDialog>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {
    albumId: 1,
  };
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <DeleteAlbumDialog {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<DeleteAlbumDialog />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(
      screen.findByAltText("DeleteAlbumDialog")
    ).resolves.toBeDefined();
    unmount();
  });
});

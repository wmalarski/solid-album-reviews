import { mockAlbumFragment } from "@tests/mocks";
import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { UpdateAlbumForm } from "./UpdateAlbumForm";

type Props = ComponentProps<typeof UpdateAlbumForm>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {
    initialAlbum: mockAlbumFragment(),
    onClose: () => void 0,
    onSubmit: () => void 0,
  };
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <UpdateAlbumForm {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<UpdateAlbumForm />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(
      screen.findByAltText("UpdateAlbumForm")
    ).resolves.toBeDefined();
    unmount();
  });
});

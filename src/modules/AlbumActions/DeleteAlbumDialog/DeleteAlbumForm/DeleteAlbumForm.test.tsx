import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { DeleteAlbumForm } from "./DeleteAlbumForm";

type Props = ComponentProps<typeof DeleteAlbumForm>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {
    onCancel: () => void 0,
    onDelete: () => void 0,
  };
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <DeleteAlbumForm {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<DeleteAlbumForm />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(
      screen.findByAltText("DeleteAlbumForm")
    ).resolves.toBeDefined();
    unmount();
  });
});

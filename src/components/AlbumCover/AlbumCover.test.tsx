import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { AlbumCover } from "./AlbumCover";

type Props = ComponentProps<typeof AlbumCover>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {
    label: "label",
    mBid: "mBid",
  };
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <AlbumCover {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<AlbumCover />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(screen.findByAltText("label")).resolves.toBeDefined();
    unmount();
  });
});

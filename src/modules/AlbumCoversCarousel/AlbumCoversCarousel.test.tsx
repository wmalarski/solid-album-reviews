import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { AlbumCoversCarousel } from "./AlbumCoversCarousel";

type Props = ComponentProps<typeof AlbumCoversCarousel>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {
    isHovering: false,
    kind: "small",
    label: "label",
    sid: "sid",
  };
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <AlbumCoversCarousel {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<AlbumCoversCarousel />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(
      screen.findByAltText("AlbumCoversCarousel")
    ).resolves.toBeDefined();
    unmount();
  });
});

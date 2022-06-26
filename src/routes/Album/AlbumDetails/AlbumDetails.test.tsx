import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { AlbumDetails } from "./AlbumDetails";

type Props = ComponentProps<typeof AlbumDetails>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {
    albumId: 0,
  };
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <AlbumDetails {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<AlbumDetails />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(screen.findByAltText("AlbumDetails")).resolves.toBeDefined();
    unmount();
  });
});

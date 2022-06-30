import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { AlbumsGrid } from "./AlbumsGrid";

type Props = ComponentProps<typeof AlbumsGrid>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {};
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <AlbumsGrid {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<AlbumsGrid />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(screen.findByAltText("AlbumsGrid")).resolves.toBeDefined();
    unmount();
  });
});

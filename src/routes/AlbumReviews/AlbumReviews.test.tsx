import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { AlbumReviews } from "./AlbumReviews";

type Props = ComponentProps<typeof AlbumReviews>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {
    albumId: 0,
    onPageChange: () => void 0,
    page: 0,
  };
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <AlbumReviews {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<AlbumReviews />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(screen.findByAltText("AlbumReviews")).resolves.toBeDefined();
    unmount();
  });
});

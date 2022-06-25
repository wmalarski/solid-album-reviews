import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import Reviews from "./Reviews";

type Props = ComponentProps<typeof Reviews>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {};
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <Reviews {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<Reviews />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(screen.findByAltText("Reviews")).resolves.toBeDefined();
    unmount();
  });
});

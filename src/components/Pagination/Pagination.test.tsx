import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { Pagination } from "./Pagination";

type Props = ComponentProps<typeof Pagination>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {
    current: 0,
    maxPage: 10,
    onChange: () => void 0,
  };
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <Pagination {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<Pagination />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(screen.findByAltText("Pagination")).resolves.toBeDefined();
    unmount();
  });
});

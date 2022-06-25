import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { ResultItem } from "./ResultItem";

type Props = ComponentProps<typeof ResultItem>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {};
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <ResultItem {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<ResultItem />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(screen.findByAltText("ResultItem")).resolves.toBeDefined();
    unmount();
  });
});

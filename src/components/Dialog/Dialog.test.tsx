import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { Dialog } from "./Dialog";

type Props = ComponentProps<typeof Dialog>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {};
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <Dialog {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<Dialog />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(screen.findByAltText("Dialog")).resolves.toBeDefined();
    unmount();
  });
});

import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { ThemeSwitch } from "./ThemeSwitch";

type Props = ComponentProps<typeof ThemeSwitch>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {};
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <ThemeSwitch {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<ThemeSwitch />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(screen.findByAltText("ThemeSwitch")).resolves.toBeDefined();
    unmount();
  });
});

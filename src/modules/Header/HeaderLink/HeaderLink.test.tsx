import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { HeaderLink } from "./HeaderLink";

type Props = ComponentProps<typeof HeaderLink>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {
    children: "Hello",
    href: "link",
  };
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <HeaderLink {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<HeaderLink />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(screen.findByAltText("HeaderLink")).resolves.toBeDefined();
    unmount();
  });
});

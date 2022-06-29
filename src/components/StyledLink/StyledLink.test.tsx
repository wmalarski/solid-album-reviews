import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { StyledLink } from "./StyledLink";

type Props = ComponentProps<typeof StyledLink>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {
    href: "",
  };
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <StyledLink {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<StyledLink />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(screen.findByAltText("StyledLink")).resolves.toBeDefined();
    unmount();
  });
});

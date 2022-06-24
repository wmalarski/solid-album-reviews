import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { SearchInput } from "./SearchInput";

type Props = ComponentProps<typeof SearchInput>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {
    onSearchChange: () => void 0,
  };
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <SearchInput {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<SearchInput />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(screen.findByAltText("SearchInput")).resolves.toBeDefined();
    unmount();
  });
});

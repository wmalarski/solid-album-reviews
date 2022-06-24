import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "solid-js";
import { render, screen } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import { SearchResults } from "./SearchResults";

type Props = ComponentProps<typeof SearchResults>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props> = {}) => {
  const defaultProps: Props = {
    albums: [],
  };
  return render(() => (
    <TestWrapper {...wrapperProps}>
      <SearchResults {...defaultProps} {...props} />
    </TestWrapper>
  ));
};

describe("<SearchResults />", () => {
  test("renders", async () => {
    const { unmount } = renderComponent();
    await expect(screen.findByAltText("SearchResults")).resolves.toBeDefined();
    unmount();
  });
});

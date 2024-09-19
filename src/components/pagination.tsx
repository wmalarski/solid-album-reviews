import { For } from "solid-js";
import { Button } from "./button";
import { IconButton } from "./icon-button";
import { ChevronLeftIcon } from "./icons/chevron-left-icon";
import { ChevronRightIcon } from "./icons/chevron-right-icon";
import * as StyledPagination from "./styled/pagination";

export interface PaginationProps extends StyledPagination.RootProps {}

export const Pagination = (props: PaginationProps) => {
	return (
		<StyledPagination.Root {...props}>
			<StyledPagination.PrevTrigger
				asChild={(props) => (
					<IconButton {...props} variant="ghost" aria-label="Next Page">
						<ChevronLeftIcon />
					</IconButton>
				)}
			/>
			<StyledPagination.Context>
				{(pagination) => (
					<For each={pagination().pages}>
						{(page, index) =>
							page.type === "page" ? (
								<StyledPagination.Item
									{...page}
									asChild={(props) => <Button {...props} variant="outline" />}
								>
									{page.value}
								</StyledPagination.Item>
							) : (
								<StyledPagination.Ellipsis index={index()}>
									&#8230;
								</StyledPagination.Ellipsis>
							)
						}
					</For>
				)}
			</StyledPagination.Context>
			<StyledPagination.NextTrigger
				asChild={(props) => (
					<IconButton {...props} variant="ghost" aria-label="Next Page">
						<ChevronRightIcon />
					</IconButton>
				)}
			/>
		</StyledPagination.Root>
	);
};

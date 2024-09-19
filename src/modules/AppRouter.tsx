import { Route, Routes } from "solid-app-router";
import { type Component, lazy } from "solid-js";
import { albumReviewsDataLoader } from "./AlbumReviews/AlbumReviews.data";
import { searchDataLoader } from "./Search/Search.data";

export const AppRouter: Component = () => {
	return (
		<Routes>
			<Route path="/" component={lazy(() => import("./Root/Root"))}>
				<Route path="/" component={lazy(() => import("./Protected/Protected"))}>
					<Route
						path="/search"
						component={lazy(() => import("./Search/Search"))}
						data={searchDataLoader}
					/>
					<Route
						path="/reviews"
						component={lazy(() => import("./Reviews/Reviews"))}
					/>
					<Route
						path="/album/:albumId"
						component={lazy(() => import("./Album/Album"))}
					>
						<Route
							path="/"
							component={lazy(() => import("./AlbumReviews/AlbumReviews"))}
							data={albumReviewsDataLoader}
						/>
					</Route>
				</Route>
			</Route>
			<Route
				path="*"
				component={lazy(() => import("./common/NotFound/NotFound"))}
			/>
		</Routes>
	);
};

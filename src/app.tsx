import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { I18nContextProvider } from "./contexts/I18nContext";
import { Head } from "./modules/common/Head";

export default function App() {
	return (
		<Router
			root={(props) => (
				<I18nContextProvider>
					<MetaProvider>
						<Head />
						<Suspense>{props.children}</Suspense>
					</MetaProvider>
				</I18nContextProvider>
			)}
		>
			<FileRoutes />
		</Router>
	);
}

import { AlbumsGrid } from "~/modules/AlbumsGrid/AlbumsGrid";
import { Head } from "~/modules/common/Head";

// export const route = {
// 	load: async () => {
// 		await Promise.all([getSessionLoader(), getInsertBoardArgsLoader()]);
// 	},
// } satisfies RouteDefinition;

export default function Home() {
	return (
		<>
			<Head />
			<AlbumsGrid />
		</>
	);
}

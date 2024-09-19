import { sprinkles } from "@styles/sprinkles.css";

export const container = sprinkles({
	backgroundColor: "background",
	display: "flex",
	flexDirection: "column",
	padding: "4",
});

export const label = sprinkles({
	flexGrow: 1,
});

export const input = sprinkles({
	width: "full",
});

export const actions = sprinkles({
	display: "flex",
	justifyContent: "flex-end",
	paddingBottom: "4",
	paddingX: "4",
});

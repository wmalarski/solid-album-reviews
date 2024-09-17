import { sprinkles } from "@styles/sprinkles.css";
import { style } from "@vanilla-extract/css";

export const container = style([
	sprinkles({
		backgroundColor: "backgroundElevated",
		width: "full",
	}),
	{
		height: "100%",
	},
]);

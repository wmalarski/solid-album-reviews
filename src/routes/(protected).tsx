import type { Component, ParentProps } from "solid-js";
import { Header } from "~/modules/common/Header/Header";

const Protected: Component<ParentProps> = (props) => {
	return (
		<>
			<Header />
			{props.children}
		</>
	);
};

export default Protected;

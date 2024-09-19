import type { Component } from "solid-js";
import { FormLabel } from "~/components/form-label";
import { Input } from "~/components/input";
import { NumberInput } from "~/components/number-input";
import { useI18n } from "~/contexts/I18nContext";
import type { Album } from "~/store/types";
import { Flex } from "~/styled-system/jsx";

type AlbumFieldsProps = {
	initialAlbum?: Album;
};

export const AlbumFields: Component<AlbumFieldsProps> = (props) => {
	const { t } = useI18n();

	return (
		<Flex flexDirection="column" padding="4">
			<FormLabel>
				{t("AlbumFields.titleLabel")}
				<Input name="title" value={props.initialAlbum?.title ?? ""} />
			</FormLabel>
			<FormLabel>
				{t("AlbumFields.yearLabel")}
				<NumberInput
					name="year"
					min={0}
					max={2100}
					step={1}
					value={String(props.initialAlbum?.year ?? 1980)}
				/>
			</FormLabel>
		</Flex>
	);
};

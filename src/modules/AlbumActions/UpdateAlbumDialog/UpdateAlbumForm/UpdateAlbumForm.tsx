import { type Component, createSignal } from "solid-js";
import { Button } from "~/components/Button/Button";
import { Form, FormActions, FormLabel } from "~/components/Form/Form";
import { Input } from "~/components/Input/Input";
import { useI18n } from "~/contexts/I18nContext";
import type { UpdateAlbumArgs } from "~/store/albums";
import type { Album } from "~/store/types";

type UpdateAlbumFormProps = {
	initialAlbum: Album;
	albumId: string;
	onClose: () => void;
	onSubmit: (args: UpdateAlbumArgs) => void;
};

export const UpdateAlbumForm: Component<UpdateAlbumFormProps> = (props) => {
	const { t } = useI18n();

	const [title, setTitle] = createSignal(props.initialAlbum.title || "");
	const [year, setYear] = createSignal(props.initialAlbum.year || 0);

	const handleSubmit = (event: Event) => {
		event.preventDefault();
		props.onSubmit({ title: title(), year: year(), albumId: props.albumId });
	};

	return (
		<Form onSubmit={handleSubmit}>
			<FormLabel>
				{t("UpdateAlbumForm.titleLabel")}
				<Input
					value={title()}
					onChange={(event) => setTitle(event.currentTarget.value)}
				/>
			</FormLabel>
			<FormLabel>
				{t("UpdateAlbumForm.yearLabel")}
				<Input
					type="number"
					min={0}
					value={year()}
					onChange={(event) => setYear(Number(event.currentTarget.value))}
				/>
			</FormLabel>
			<FormActions>
				<Button type="submit">{t("UpdateAlbumForm.submit")}</Button>
			</FormActions>
		</Form>
	);
};

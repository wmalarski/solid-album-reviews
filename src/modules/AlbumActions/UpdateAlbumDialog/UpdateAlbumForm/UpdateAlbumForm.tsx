import { Button } from "@components/Button/Button";
import { Form, FormActions, FormLabel } from "@components/Form/Form";
import { Input } from "@components/Input/Input";
import { AlbumFragment, AlbumSetInput } from "@services/types";
import { useI18n } from "@solid-primitives/i18n";
import { Component, createSignal } from "solid-js";

type Props = {
  initialAlbum: AlbumFragment;
  onClose: () => void;
  onSubmit: (args: AlbumSetInput) => void;
};

export const UpdateAlbumForm: Component<Props> = (props) => {
  const [t] = useI18n();

  const [title, setTitle] = createSignal(props.initialAlbum.title || "");
  const [year, setYear] = createSignal(props.initialAlbum.year || 0);

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    props.onSubmit({ title: title(), year: year() });
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

import { Button } from "@components/Button/Button";
import { Input } from "@components/Input/Input";
import { AlbumFragment, AlbumSetInput } from "@services/types";
import { useI18n } from "@solid-primitives/i18n";
import { Component, createSignal } from "solid-js";
import * as classes from "./UpdateAlbumForm.css";

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
    <form class={classes.container} onSubmit={handleSubmit}>
      <label>
        {t("UpdateAlbumForm.titleLabel")}
        <Input
          value={title()}
          onChange={(event) => setTitle(event.currentTarget.value)}
        />
      </label>
      <label>
        {t("UpdateAlbumForm.yearLabel")}
        <Input
          type="number"
          min={0}
          value={year()}
          onChange={(event) => setYear(Number(event.currentTarget.value))}
        />
      </label>
      <Button type="submit">{t("UpdateAlbumForm.submit")}</Button>
    </form>
  );
};

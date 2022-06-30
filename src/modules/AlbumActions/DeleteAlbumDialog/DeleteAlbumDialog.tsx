import { Button } from "@components/Button/Button";
import { Dialog } from "@components/Dialog/Dialog";
import { graphqlSdk } from "@services/fetcher";
import { createButton } from "@solid-aria/button";
import {
  createOverlayTriggerState,
  OverlayContainer,
} from "@solid-aria/overlays";
import { useI18n } from "@solid-primitives/i18n";
import { getPortalContainer } from "@utils/getPortalContainer";
import { Component, Show } from "solid-js";
import { DeleteAlbumForm } from "./DeleteAlbumForm/DeleteAlbumForm";

type Props = {
  albumId: number;
  onSuccess: () => void;
};

export const DeleteAlbumDialog: Component<Props> = (props) => {
  const [t] = useI18n();

  let openButtonRef: HTMLButtonElement | undefined;

  const state = createOverlayTriggerState({});

  const { buttonProps: openButtonProps } = createButton(
    { onPress: () => state.open() },
    () => openButtonRef
  );

  const handleSubmit = async () => {
    await graphqlSdk.DeleteAlbum({ id: props.albumId });
    state.close();
    props.onSuccess();
  };

  return (
    <>
      <Button {...openButtonProps} ref={openButtonRef}>
        {t("DeleteAlbumDialog.trigger")}
      </Button>
      <Show when={state.isOpen()}>
        <OverlayContainer portalContainer={getPortalContainer()}>
          <Dialog
            isDismissable
            isOpen
            onClose={state.close}
            title={t("DeleteAlbumDialog.title")}
          >
            <DeleteAlbumForm onCancel={state.close} onDelete={handleSubmit} />
          </Dialog>
        </OverlayContainer>
      </Show>
    </>
  );
};

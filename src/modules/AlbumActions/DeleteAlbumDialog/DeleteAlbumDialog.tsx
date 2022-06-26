import { Dialog } from "@components/Dialog/Dialog";
import { graphqlSdk } from "@services/fetcher";
import { createButton } from "@solid-aria/button";
import {
  createOverlayTriggerState,
  OverlayContainer,
} from "@solid-aria/overlays";
import { useI18n } from "@solid-primitives/i18n";
import { getPortalContainer } from "@utils/getPortalContainer";
import { paths } from "@utils/paths";
import { useNavigate } from "solid-app-router";
import { Component, Show } from "solid-js";
import { DeleteAlbumForm } from "./DeleteAlbumForm/DeleteAlbumForm";

type Props = {
  albumId: number;
};

export const DeleteAlbumDialog: Component<Props> = (props) => {
  const [t] = useI18n();

  const navigate = useNavigate();

  let openButtonRef: HTMLButtonElement | undefined;

  const state = createOverlayTriggerState({});

  const { buttonProps: openButtonProps } = createButton(
    { onPress: () => state.open() },
    () => openButtonRef
  );

  const handleSubmit = async () => {
    await graphqlSdk.DeleteAlbum({ id: props.albumId });
    state.close();
    navigate(paths.root);
    // props.onSuccess();
  };

  return (
    <>
      <button {...openButtonProps} ref={openButtonRef}>
        {t("DeleteAlbumDialog.trigger")}
      </button>
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

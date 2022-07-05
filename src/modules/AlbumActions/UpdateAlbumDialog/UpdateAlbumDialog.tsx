import { Button } from "@components/Button/Button";
import { Dialog } from "@components/Dialog/Dialog";
import { graphqlSdk } from "@services/fetcher";
import { AlbumFragment, AlbumSetInput } from "@services/types";
import { createButton } from "@solid-aria/button";
import {
  createOverlayTriggerState,
  OverlayContainer,
} from "@solid-aria/overlays";
import { useI18n } from "@solid-primitives/i18n";
import { getPortalContainer } from "@utils/getPortalContainer";
import { BsPencilSquare } from "solid-icons/bs";
import { Component, Show } from "solid-js";
import { UpdateAlbumForm } from "./UpdateAlbumForm/UpdateAlbumForm";

type Props = {
  album: AlbumFragment;
  onSuccess: () => void;
  isIcon?: boolean;
};

export const UpdateAlbumDialog: Component<Props> = (props) => {
  const [t] = useI18n();

  let openButtonRef: HTMLButtonElement | undefined;

  const state = createOverlayTriggerState({});

  const { buttonProps: openButtonProps } = createButton(
    { onPress: () => state.open() },
    () => openButtonRef
  );

  const handleSubmit = async (input: AlbumSetInput) => {
    await graphqlSdk.UpdateAlbum({ id: props.album.id, input });
    state.close();
    props.onSuccess();
  };

  return (
    <>
      <Button
        {...openButtonProps}
        ref={openButtonRef}
        aria-label={t("UpdateAlbumDialog.trigger")}
      >
        {props.isIcon ? (
          <BsPencilSquare size={20} />
        ) : (
          t("UpdateAlbumDialog.trigger")
        )}
      </Button>
      <Show when={state.isOpen()}>
        <OverlayContainer portalContainer={getPortalContainer()}>
          <Dialog
            isDismissable
            isOpen
            onClose={state.close}
            title={t("UpdateAlbumDialog.title")}
          >
            <UpdateAlbumForm
              initialAlbum={props.album}
              onClose={state.close}
              onSubmit={handleSubmit}
            />
          </Dialog>
        </OverlayContainer>
      </Show>
    </>
  );
};

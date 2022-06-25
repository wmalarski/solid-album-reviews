import { Dialog } from "@components/Dialog/Dialog";
import { ReviewForm } from "@modules/ReviewForm/ReviewForm";
import { createButton } from "@solid-aria/button";
import {
  createOverlayTriggerState,
  OverlayContainer,
} from "@solid-aria/overlays";
import { useI18n } from "@solid-primitives/i18n";
import { getPortalContainer } from "@utils/getPortalContainer";
import { Component, Show } from "solid-js";

export const ReviewDialog: Component = () => {
  const [t] = useI18n();

  let openButtonRef: HTMLButtonElement | undefined;

  const state = createOverlayTriggerState({});

  const { buttonProps: openButtonProps } = createButton(
    { onPress: () => state.open() },
    () => openButtonRef
  );

  const handleSubmit = () => {
    state.close();
  };

  return (
    <>
      <button {...openButtonProps} ref={openButtonRef}>
        {t("ReviewDialog.trigger")}
      </button>
      <Show when={state.isOpen()}>
        <OverlayContainer portalContainer={getPortalContainer()}>
          <Dialog
            isDismissable
            isOpen
            onClose={state.close}
            title={t("ReviewDialog.title")}
          >
            <ReviewForm onClose={state.close} onSubmit={handleSubmit} />
          </Dialog>
        </OverlayContainer>
      </Show>
    </>
  );
};

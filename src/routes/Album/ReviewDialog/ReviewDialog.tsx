import { Dialog } from "@components/Dialog/Dialog";
import { createButton } from "@solid-aria/button";
import {
  createOverlayTriggerState,
  OverlayContainer,
} from "@solid-aria/overlays";
import { getPortalContainer } from "@utils/getPortalContainer";
import { Component, Show } from "solid-js";

export const ReviewDialog: Component = () => {
  let openButtonRef: HTMLButtonElement | undefined;
  let closeButtonRef: HTMLButtonElement | undefined;

  const state = createOverlayTriggerState({});

  const { buttonProps: openButtonProps } = createButton(
    { onPress: () => state.open() },
    () => openButtonRef
  );

  const { buttonProps: closeButtonProps } = createButton(
    { onPress: () => state.close() },
    () => closeButtonRef
  );

  return (
    <>
      <button {...openButtonProps} ref={openButtonRef}>
        Open Dialog
      </button>
      <Show when={state.isOpen()}>
        <OverlayContainer portalContainer={getPortalContainer()}>
          <Dialog
            title="Enter your name"
            isOpen
            onClose={state.close}
            isDismissable
          >
            <form style={{ display: "flex", "flex-direction": "column" }}>
              <label for="first-name">
                First Name:
                <input id="first-name" />
              </label>
              <label for="last-name">
                Last Name:
                <input id="last-name" />
              </label>
              <button
                {...closeButtonProps}
                ref={closeButtonRef}
                style={{ "margin-top": "10px" }}
              >
                Submit
              </button>
            </form>
          </Dialog>
        </OverlayContainer>
      </Show>
    </>
  );
};

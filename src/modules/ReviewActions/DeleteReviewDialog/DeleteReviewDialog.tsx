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
import { DeleteReviewForm } from "./DeleteReviewForm/DeleteReviewForm";

type Props = {
  reviewId: number;
  onSuccess: () => void;
};

export const DeleteReviewDialog: Component<Props> = (props) => {
  const [t] = useI18n();

  let openButtonRef: HTMLButtonElement | undefined;

  const state = createOverlayTriggerState({});

  const { buttonProps: openButtonProps } = createButton(
    { onPress: () => state.open() },
    () => openButtonRef
  );

  const handleSubmit = async () => {
    await graphqlSdk.DeleteReview({ id: props.reviewId });
    state.close();
    props.onSuccess();
  };

  return (
    <>
      <button {...openButtonProps} ref={openButtonRef}>
        {t("DeleteReviewDialog.trigger")}
      </button>
      <Show when={state.isOpen()}>
        <OverlayContainer portalContainer={getPortalContainer()}>
          <Dialog
            isDismissable
            isOpen
            onClose={state.close}
            title={t("DeleteReviewDialog.title")}
          >
            <DeleteReviewForm onCancel={state.close} onDelete={handleSubmit} />
          </Dialog>
        </OverlayContainer>
      </Show>
    </>
  );
};

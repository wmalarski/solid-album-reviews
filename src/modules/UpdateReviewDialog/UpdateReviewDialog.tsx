import { Dialog } from "@components/Dialog/Dialog";
import { ReviewForm } from "@modules/ReviewForm/ReviewForm";
import { graphqlSdk } from "@services/fetcher";
import { ReviewFragment, ReviewSetInput } from "@services/types";
import { createButton } from "@solid-aria/button";
import {
  createOverlayTriggerState,
  OverlayContainer,
} from "@solid-aria/overlays";
import { useI18n } from "@solid-primitives/i18n";
import { getPortalContainer } from "@utils/getPortalContainer";
import { Component, Show } from "solid-js";

type Props = {
  review: ReviewFragment;
  onSuccess: () => void;
};

export const UpdateReviewDialog: Component<Props> = (props) => {
  const [t] = useI18n();

  let openButtonRef: HTMLButtonElement | undefined;

  const state = createOverlayTriggerState({});

  const { buttonProps: openButtonProps } = createButton(
    { onPress: () => state.open() },
    () => openButtonRef
  );

  const handleSubmit = async (input: ReviewSetInput) => {
    await graphqlSdk.UpdateReview({ id: props.review.id, input });
    state.close();
    props.onSuccess();
  };

  return (
    <>
      <button {...openButtonProps} ref={openButtonRef}>
        {t("UpdateReviewDialog.trigger")}
      </button>
      <Show when={state.isOpen()}>
        <OverlayContainer portalContainer={getPortalContainer()}>
          <Dialog
            isDismissable
            isOpen
            onClose={state.close}
            title={t("UpdateReviewDialog.title")}
          >
            <ReviewForm
              initialReview={props.review}
              onClose={state.close}
              onSubmit={handleSubmit}
            />
          </Dialog>
        </OverlayContainer>
      </Show>
    </>
  );
};

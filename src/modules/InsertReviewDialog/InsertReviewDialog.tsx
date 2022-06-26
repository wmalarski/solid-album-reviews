import { Dialog } from "@components/Dialog/Dialog";
import { ReviewForm } from "@modules/ReviewForm/ReviewForm";
import { graphqlSdk } from "@services/fetcher";
import { ReviewInsertInput } from "@services/types";
import { createButton } from "@solid-aria/button";
import {
  createOverlayTriggerState,
  OverlayContainer,
} from "@solid-aria/overlays";
import { useI18n } from "@solid-primitives/i18n";
import { getPortalContainer } from "@utils/getPortalContainer";
import { Component, Show } from "solid-js";

type Props = {
  albumId: number;
};

export const InsertReviewDialog: Component<Props> = (props) => {
  const [t] = useI18n();

  let openButtonRef: HTMLButtonElement | undefined;

  const state = createOverlayTriggerState({});

  const { buttonProps: openButtonProps } = createButton(
    { onPress: () => state.open() },
    () => openButtonRef
  );

  const handleSubmit = async (review: ReviewInsertInput) => {
    await graphqlSdk.InsertReview({ review });
    state.close();
  };

  return (
    <>
      <button {...openButtonProps} ref={openButtonRef}>
        {t("InsertReviewDialog.trigger")}
      </button>
      <Show when={state.isOpen()}>
        <OverlayContainer portalContainer={getPortalContainer()}>
          <Dialog
            isDismissable
            isOpen
            onClose={state.close}
            title={t("InsertReviewDialog.title")}
          >
            <ReviewForm
              albumId={props.albumId}
              onClose={state.close}
              onSubmit={handleSubmit}
            />
          </Dialog>
        </OverlayContainer>
      </Show>
    </>
  );
};

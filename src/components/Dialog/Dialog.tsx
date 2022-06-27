import { AriaDialogProps, createDialog } from "@solid-aria/dialog";
import { FocusScope } from "@solid-aria/focus";
import {
  AriaModalProps,
  AriaOverlayProps,
  createModal,
  createOverlay,
  createPreventScroll,
} from "@solid-aria/overlays";
import * as classes from "./Dialog.css";

import { Button } from "@components/Button/Button";
import { useI18n } from "@solid-primitives/i18n";
import { Component, JSX } from "solid-js";

type Props = AriaDialogProps &
  AriaModalProps &
  AriaOverlayProps & {
    title?: JSX.Element;
    children?: JSX.Element;
  };

export const Dialog: Component<Props> = (props) => {
  const [t] = useI18n();

  let ref: HTMLDivElement | undefined;

  const { overlayProps, underlayProps } = createOverlay(props, () => ref);

  createPreventScroll();

  const { modalProps } = createModal();

  const { dialogProps, titleProps } = createDialog(props, () => ref);

  return (
    <div class={classes.container} {...underlayProps}>
      <FocusScope contain restoreFocus autofocus>
        <div
          {...overlayProps}
          {...dialogProps}
          {...modalProps}
          ref={ref}
          class={classes.content}
        >
          <div class={classes.header}>
            <h3 {...titleProps} class={classes.title}>
              {props.title}
            </h3>
            <Button onClick={() => props.onClose?.()}>
              {t("Dialog.close")}
            </Button>
          </div>
          {props.children}
        </div>
      </FocusScope>
    </div>
  );
};

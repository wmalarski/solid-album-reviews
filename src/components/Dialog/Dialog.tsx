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

import { Component, JSX } from "solid-js";

type Props = AriaDialogProps &
  AriaModalProps &
  AriaOverlayProps & {
    title?: JSX.Element;
    children?: JSX.Element;
  };

export const Dialog: Component<Props> = (props) => {
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
          style={{
            background: "white",
            color: "black",
            padding: "30px",
          }}
        >
          <h3 {...titleProps} class={classes.title}>
            {props.title}
          </h3>
          {props.children}
        </div>
      </FocusScope>
    </div>
  );
};

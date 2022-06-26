import { CoverKind, fetchCovers } from "@services/coverArt";
import { Component, createResource, createSignal, Show } from "solid-js";
import * as classes from "./AlbumCoversCarousel.css";

type Props = {
  isHovering: boolean;
  label: string;
  sid: string;
  kind: CoverKind;
};

export const AlbumCoversCarousel: Component<Props> = (props) => {
  const [index, setIndex] = createSignal(0);

  const [thumbnails] = createResource(
    () => ({ kind: props.kind, mBid: props.sid }),
    fetchCovers
  );

  const handlePreviousClick = () => {
    setIndex((current) => Math.max(current - 1, 0));
  };

  const handleNextClick = () => {
    const max = thumbnails()?.length || 0;
    setIndex((current) => Math.min(current + 1, max - 1));
  };

  return (
    <div class={classes.container}>
      <div class={classes.wrapper}>
        <img
          alt={props.label}
          aria-label={props.label}
          classList={{
            [classes.image]: true,
            [classes.imageVariant[
              props.isHovering
                ? props.kind === "small"
                  ? "smallHover"
                  : "largeHover"
                : props.kind === "small"
                ? "smallNormal"
                : "largeNormal"
            ]]: true,
          }}
          src={thumbnails()?.[index()]}
        />
        <Show when={props.isHovering}>
          <button
            class={classes.previous}
            disabled={index() <= 0}
            onClick={handlePreviousClick}
          >
            {"<"}
          </button>
          <button
            class={classes.next}
            disabled={index() >= (thumbnails()?.length || 0) - 1}
            onClick={handleNextClick}
          >
            {">"}
          </button>
        </Show>
      </div>
    </div>
  );
};

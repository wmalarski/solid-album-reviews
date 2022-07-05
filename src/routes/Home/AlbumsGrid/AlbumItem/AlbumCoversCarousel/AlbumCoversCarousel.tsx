import { Button } from "@components/Button/Button";
import { fetchCovers } from "@services/coverArt";
import clsx from "clsx";
import { Component, createResource, createSignal, Show } from "solid-js";
import * as classes from "./AlbumCoversCarousel.css";

type Props = {
  isHovering: boolean;
  label: string;
  sid: string;
};

export const AlbumCoversCarousel: Component<Props> = (props) => {
  const [index, setIndex] = createSignal(0);

  const [thumbnails] = createResource(
    () => ({ kind: "small" as const, mBid: props.sid }),
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
          class={clsx(
            classes.image,
            classes.imageVariant[props.isHovering ? "hover" : "outside"]
          )}
          src={thumbnails()?.[index()]}
        />
        <Show when={props.isHovering}>
          <Button
            class={classes.previous}
            disabled={index() <= 0}
            onClick={handlePreviousClick}
          >
            {"<"}
          </Button>
          <Button
            class={classes.next}
            disabled={index() >= (thumbnails()?.length || 0) - 1}
            onClick={handleNextClick}
          >
            {">"}
          </Button>
        </Show>
      </div>
    </div>
  );
};

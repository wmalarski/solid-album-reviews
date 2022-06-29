import { StyledLink } from "@components/StyledLink/StyledLink";
import { AlbumActions } from "@modules/AlbumActions/AlbumActions";
import { AlbumCoversCarousel } from "@modules/AlbumCoversCarousel/AlbumCoversCarousel";
import type { AlbumWithArtistFragment } from "@services/types";
import { formatAlbum } from "@utils/formatters";
import { paths } from "@utils/paths";
import clsx from "clsx";
import { Component, createMemo, createSignal, Show } from "solid-js";
import * as classes from "./AlbumItem.css";

type Props = {
  album: AlbumWithArtistFragment;
};

export const AlbumItem: Component<Props> = (props) => {
  const [isHovering, setIsHovering] = createSignal(false);

  const label = createMemo(() => {
    return formatAlbum(props.album);
  });

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      class={classes.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Show when={props.album.sid}>
        {(mBid) => (
          <div
            class={clsx(
              classes.wrapper,
              classes.wrapperVariants[isHovering() ? "hover" : "no"]
            )}
          >
            <AlbumCoversCarousel
              isHovering={isHovering()}
              label={label()}
              sid={mBid}
              kind="small"
            />
            <Show when={isHovering()}>
              <div class={classes.footer}>
                <Show when={props.album.id}>
                  {(id) => (
                    <StyledLink class={classes.heading} href={paths.album(id)}>
                      {label()}
                    </StyledLink>
                  )}
                </Show>
                <AlbumActions album={props.album} />
              </div>
            </Show>
          </div>
        )}
      </Show>
    </div>
  );
};

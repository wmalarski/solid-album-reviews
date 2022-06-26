import { AlbumActions } from "@modules/AlbumActions/AlbumActions";
import { AlbumCoversCarousel } from "@modules/AlbumCoversCarousel/AlbumCoversCarousel";
import type { AlbumWithArtistFragment } from "@services/types";
import { formatAlbum } from "@utils/formatters";
import { paths } from "@utils/paths";
import { Link } from "solid-app-router";
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
            classList={{
              [classes.wrapper]: true,
              [classes.wrapperVariants[isHovering() ? "hover" : "no"]]: true,
            }}
          >
            <AlbumCoversCarousel
              isHovering={isHovering()}
              label={label()}
              sid={mBid}
              kind="small"
            />
            <Show when={isHovering()}>
              <div class={classes.actions}>
                <Show when={props.album.id}>
                  {(id) => <Link href={paths.album(id)}>{label()}</Link>}
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

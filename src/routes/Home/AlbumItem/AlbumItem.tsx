import { frontCoverUrl } from "@services/coverArt";
import type { RandomAlbumWithArtistFragment } from "@services/types";
import { formatAlbum } from "@utils/formatters";
import { Component, createMemo, createSignal, Show } from "solid-js";
import * as classes from "./AlbumItem.css";

type Props = {
  album: RandomAlbumWithArtistFragment;
};

// const fetchCovers = async (id: string) => {
//   const response = await fetch(`https://coverartarchive.org/release/${id}`);
//   return response.json();
// };

export const AlbumItem: Component<Props> = (props) => {
  const [isHovering, setIsHovering] = createSignal(false);

  // const [data] = createResource(() => props.album.sid, fetchCovers);

  // const thumbnails = () => {
  //   if (!data) {
  //     return [];
  //   }
  //   return data().images.map((image) => image.thumbnails.small);
  // };

  // createEffect(() => {
  //   console.log("data", thumbnails());
  // });

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
            <img
              classList={{
                [classes.image]: true,
                [classes.imageVariant[isHovering() ? "hover" : "no"]]: true,
              }}
              alt={label()}
              aria-label={label()}
              src={frontCoverUrl({ mBid })}
            />
            <Show when={isHovering()}>
              <div class={classes.actions}>
                <span>{label()}</span>
              </div>
            </Show>
          </div>
        )}
      </Show>
    </div>
  );
};

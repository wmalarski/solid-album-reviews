import {
  AlbumWithArtistFragment,
  RandomAlbumWithArtistFragment,
} from "@services/types";

export const requireAlbumFragment = (
  random: RandomAlbumWithArtistFragment
): AlbumWithArtistFragment | null => {
  if (
    !random.id ||
    !random.sid ||
    !random.artistByArtist ||
    !random.title ||
    (!random.year && random.year !== 0)
  ) {
    return null;
  }
  return {
    id: random.id,
    artistByArtist: random.artistByArtist,
    sid: random.sid,
    title: random.title,
    year: random.year,
  };
};

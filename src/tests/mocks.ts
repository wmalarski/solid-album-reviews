import { AlbumWithArtistFragment } from "@services/types";

export const mockAlbumWithArtistFragment = (
  update: Partial<AlbumWithArtistFragment> = {}
): AlbumWithArtistFragment => {
  return {
    artistByArtist: {
      id: 1,
      name: "Artist",
    },
    id: 1,
    sid: "123",
    title: "Title",
    year: 1999,
    ...update,
  };
};

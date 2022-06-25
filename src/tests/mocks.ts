import {
  AlbumWithArtistFragment,
  ReviewWithAlbumAndArtistFragment,
} from "@services/types";

const mockId = () => {
  return Math.floor(Math.random() * 1e15);
};

export const mockAlbumWithArtistFragment = (
  update: Partial<AlbumWithArtistFragment> = {}
): AlbumWithArtistFragment => {
  return {
    artistByArtist: { id: mockId(), name: "Artist" },
    id: mockId(),
    sid: "123",
    title: "Title",
    year: 1999,
    ...update,
  };
};

// export const mockReviewWithAlbumFragment = (update: Partial<ReviewWithAlbumFragment> = {}): ReviewWithAlbumFragment => {
//   return {
//     albumByAlbum: mockAlbumWithArtistFragment(),
//     createdAt: new Date().toDateString(),
//     id: mockId(),
//     rate: 5.5,
//     text: "",
//     ...update,
//   }
// }

export const mockReviewWithAlbumAndArtistFragment = (
  update: Partial<ReviewWithAlbumAndArtistFragment> = {}
): ReviewWithAlbumAndArtistFragment => {
  return {
    albumByAlbum: mockAlbumWithArtistFragment(),
    createdAt: new Date().toDateString(),
    id: mockId(),
    rate: 6.6,
    text: "Text",
    ...update,
  };
};

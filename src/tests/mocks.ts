import {
  AlbumFragment,
  AlbumWithArtistFragment,
  AlbumWithReviewsFragment,
  ReviewFragment,
  ReviewWithAlbumAndArtistFragment,
} from "@services/types";

const mockId = () => {
  return Math.floor(Math.random() * 1e15);
};

export const mockReviewFragment = (
  update: Partial<ReviewFragment> = {}
): ReviewFragment => {
  return {
    id: mockId(),
    createdAt: new Date().toDateString(),
    rate: 5.5,
    text: "123",
    ...update,
  };
};

export const mockAlbumFragment = (
  update: Partial<AlbumFragment> = {}
): AlbumFragment => {
  return {
    id: mockId(),
    sid: "123",
    title: "Title",
    year: 1999,
    ...update,
  };
};

export const mockArtistFragment = (
  update: Partial<ArtistFragment> = {}
): ArtistFragment => {
  return {
    id: mockId(),
    name: "Artist",
    ...update,
  };
};

export const mockAlbumWithArtistFragment = (
  update: Partial<AlbumWithArtistFragment> = {}
): AlbumWithArtistFragment => {
  return {
    artistByArtist: mockArtistFragment(),
    ...mockAlbumFragment(),
    ...update,
  };
};

export const mockAlbumWithReviewsFragment = (
  update: Partial<AlbumWithReviewsFragment> = {}
): AlbumWithReviewsFragment => {
  return {
    ...mockAlbumFragment(),
    reviews: [mockReviewFragment()],
    ...update,
  };
};

export const mockReviewWithAlbumAndArtistFragment = (
  update: Partial<ReviewWithAlbumAndArtistFragment> = {}
): ReviewWithAlbumAndArtistFragment => {
  return {
    albumByAlbum: mockAlbumWithArtistFragment(),
    ...mockReviewFragment(),
    ...update,
  };
};

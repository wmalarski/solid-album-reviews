export type FormatAlbumArgs = {
  title?: string | null | undefined;
  artistByArtist?:
    | {
        name?: string | null | undefined;
      }
    | null
    | undefined;
};

export const formatAlbum = (album: FormatAlbumArgs): string => {
  return `${album.title}${
    album.artistByArtist ? ` - ${album.artistByArtist?.name}` : ""
  }`;
};

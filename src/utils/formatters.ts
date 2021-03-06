export type FormatAlbumArgs = {
  title?: string | null | undefined;
  year?: number | null | undefined;
  artistByArtist?:
    | {
        name?: string | null | undefined;
      }
    | null
    | undefined;
};

export const formatAlbum = (album: FormatAlbumArgs): string => {
  const artist = album.artistByArtist ? ` - ${album.artistByArtist?.name}` : "";
  const year = album.year ? `(${album.year})` : "";
  return `${album.title}${artist}${year}`;
};

export const formatDate = (locale: string, date: string): string => {
  return new Intl.DateTimeFormat(locale).format(new Date(date));
};

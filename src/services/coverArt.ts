type FrontCoverUrlArgs = {
  mBid: string;
};

export const frontCoverUrl = ({ mBid }: FrontCoverUrlArgs): string => {
  return `https://coverartarchive.org/release/${mBid}/front-250`;
};

type ImageData = {
  thumbnails: {
    small: string;
  };
};

export const fetchCovers = async (id: string): Promise<string[]> => {
  const response = await fetch(`https://coverartarchive.org/release/${id}`);

  if (response.status !== 200) {
    return [];
  }

  const json = await response.json();

  const thumbnails = json.images.map(
    (image: ImageData) => image.thumbnails.small
  );

  return thumbnails;
};

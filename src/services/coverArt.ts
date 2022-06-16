type FrontCoverUrlArgs = {
  mBid: string;
};

export const frontCoverUrl = ({ mBid }: FrontCoverUrlArgs): string => {
  return `https://coverartarchive.org/release/${mBid}/front-250`;
};

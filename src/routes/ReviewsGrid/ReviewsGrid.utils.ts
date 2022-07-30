import type { ReviewGrid, SelectReviewsGridQuery } from "@services/types";

const getDateRange = (): Date[] => {
  const init = new Date();
  init.setUTCHours(0, 0, 0, 0);

  return Array(179)
    .fill(0)
    .reduce<Date[]>(
      (prev) => {
        const next = new Date(prev[0]);
        next.setDate(next.getDate() - 1);
        return [next, ...prev];
      },
      [init]
    );
};

type GridData = {
  date: Date;
  // day: number;
  item?: ReviewGrid;
  scale: number;
};

export const fillGrid = (query?: SelectReviewsGridQuery) => {
  const items = query?.review_grid || [];

  const max = items
    .map((item) => item.count || 0)
    .reduce((prev, curr) => Math.max(prev, curr), 1);

  const map = new Map(
    items.map((item) => [new Date(item.day).toISOString() as string, item])
  );

  const range = getDateRange();

  const flatten = range.map((date) => {
    const item = map.get(date.toISOString());
    const scale = (item?.count || 0) / max;
    return { date, item, scale };
  });

  const result = flatten.reduce<GridData[][]>((prev, curr) => {
    if (prev.length < 1 || curr.date.getDay() === 0) {
      prev.push([curr]);
      return prev;
    }
    const last = prev[prev.length - 1];
    last.push(curr);
    return prev;
  }, []);

  return result;
};

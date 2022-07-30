import type { ReviewGrid, SelectReviewsGridQuery } from "@services/types";

const getDateRange = (count: number): Date[] => {
  const init = new Date();
  init.setUTCHours(0, 0, 0, 0);

  return Array(count - 1)
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

export type GridData = {
  date: Date;
  item?: ReviewGrid;
  scale: number;
};

export const fillGrid = (count: number, query?: SelectReviewsGridQuery) => {
  const items = query?.review_grid || [];

  const max = items
    .map((item) => item.count || 0)
    .reduce((prev, curr) => Math.max(prev, curr), 1);

  const map = new Map(
    items.map((item) => [new Date(item.day).toISOString() as string, item])
  );

  const range = getDateRange(count);

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

export type MonthData = {
  date: Date;
  start: number;
  size: number;
};

export const getMonths = (count: number) => {
  const range = getDateRange(count);

  const firstDays = range.filter((date) => date.getDay() === 0);

  const map = firstDays
    .map((date) => {
      date.setUTCDate(1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    })
    .reduce((prev, curr) => {
      const key = curr.toISOString();
      const value = prev.get(key) || 0;
      prev.set(key, value + 1);
      return prev;
    }, new Map<string, number>());

  const days = new Array(...map.entries()).reduce<MonthData[]>((prev, curr) => {
    const next = { date: new Date(curr[0]), size: curr[1] };
    if (prev.length < 1) {
      prev.push({ ...next, start: 0 });
      return prev;
    }
    const last = prev[prev.length - 1];
    prev.push({ ...next, start: last.start + last.size });
    return prev;
  }, []);

  return days;
};

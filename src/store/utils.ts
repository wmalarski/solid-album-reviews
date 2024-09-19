export const getCreatedAt = () => {
	return new Date().getTime();
};

type GetPageArgs<T> = {
	data: T[];
	page: number;
	limit: number;
};

export const getPage = <T>({ data, limit, page }: GetPageArgs<T>) => {
	const sliced = data.slice(page * limit, (page + 1) * limit);
	return {
		data: sliced,
		length: data.length,
		maxPage: Math.floor(data.length / limit),
	};
};

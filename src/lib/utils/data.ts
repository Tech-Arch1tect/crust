export const getTopItems = (stats: { [key: string]: number } = {}, limit = 5) => {
	return Object.entries(stats)
		.sort(([, a], [, b]) => b - a)
		.slice(0, limit)
		.map(([name, count]) => ({ name, count }));
};

export const getSortedItems = (stats: { [key: string]: number } = {}) => {
	return Object.entries(stats)
		.sort(([, a], [, b]) => b - a)
		.map(([name, count]) => ({ name, count }));
};

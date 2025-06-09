export function getCategoryName(category: string | undefined | null) {
	if (!category) return 'Uncategorised';
	const categoryName = category.split('/').pop()?.replace('-', ' ');
	return categoryName
		? categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
		: 'Uncategorised';
}

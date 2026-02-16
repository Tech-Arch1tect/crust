import { previewsApi, searchApi } from '$lib/api';
import type { PageServerLoad } from './$types';
import type { MainPostPreview } from '../../api-client';

export const load: PageServerLoad = async ({ parent, url }) => {
	const { meta } = await parent();
	const query = url.searchParams.get('q')?.trim() || '';

	if (!query) {
		return { meta, query, results: [] as MainPostPreview[] };
	}

	const index = await searchApi.searchIndexJsonGet();
	const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
	const slugCounts = new Map<string, number>();

	const indexData = index.data ?? {};
	const indexKeys = Object.keys(indexData);

	for (const term of terms) {
		const matchingKeys = indexKeys.filter((key) => key.includes(term));
		for (const key of matchingKeys) {
			for (const slug of indexData[key]) {
				slugCounts.set(slug, (slugCounts.get(slug) || 0) + 1);
			}
		}
	}

	const rankedSlugs = [...slugCounts.entries()]
		.sort((a, b) => b[1] - a[1])
		.slice(0, 20)
		.map(([slug]) => slug);

	const settled = await Promise.allSettled(
		rankedSlugs.map((slug) => previewsApi.previewsBySlugGet({ slug }))
	);

	const results: MainPostPreview[] = settled
		.filter(
			(r): r is PromiseFulfilledResult<{ data?: MainPostPreview }> => r.status === 'fulfilled'
		)
		.map((r) => r.value.data)
		.filter((d): d is MainPostPreview => d != null);

	return { meta, query, results };
};

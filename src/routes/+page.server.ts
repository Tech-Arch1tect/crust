import { previewsApi } from '$lib/api';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	const { meta } = await parent();

	const latestPosts = await previewsApi.previewsGet({
		page: 0
	});

	return {
		meta,
		latestPosts,
		pageType: 'home'
	};
};

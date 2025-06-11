import { postsApi } from '$lib/api';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent, params }) => {
	const { meta } = await parent();

	const post = await postsApi.postsBySlugGet({
		slug: params.slug
	});

	return {
		meta,
		post,
		pageType: 'post'
	};
};

import { postsApi } from '$lib/api';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent, params }) => {
	const { meta } = await parent();

	let post;

	try {
		const postResponse = await postsApi.postsBySlugGet({
			slug: params.slug
		});
		post = postResponse.data;
	} catch (apiError) {
		console.error(apiError);
		throw error(404, 'Post not found');
	}

	return {
		meta,
		post,
		pageType: 'post'
	};
};

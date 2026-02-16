import { postsApi, relatedApi } from '$lib/api';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent, params }) => {
	const { meta } = await parent();

	const [postResult, relatedResult] = await Promise.allSettled([
		postsApi.postsBySlugGet({ slug: params.slug }),
		relatedApi.relatedGet({ slug: params.slug })
	]);

	if (postResult.status === 'rejected') {
		console.error(postResult.reason);
		throw error(404, 'Post not found');
	}

	const post = postResult.value.data;
	const relatedPosts = relatedResult.status === 'fulfilled' ? (relatedResult.value.data ?? []) : [];

	return {
		meta,
		post,
		relatedPosts,
		pageType: 'post'
	};
};

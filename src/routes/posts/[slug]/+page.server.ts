import { postsApi, relatedApi } from '$lib/api';
import { renderMarkdown } from '$lib/utils/markdown';
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
	const html = await renderMarkdown(post?.markdown || '');

	return {
		meta,
		post,
		relatedPosts,
		html,
		pageType: 'post'
	};
};

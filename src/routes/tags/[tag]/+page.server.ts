import { tagsApi } from '$lib/api';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent, params }) => {
	const { meta } = await parent();

	let postsByTag;
	const tag = params.tag;

	try {
		postsByTag = await tagsApi.tagsGet({
			tag: params.tag
		});
	} catch (apiError) {
		console.error(apiError);
		throw error(404, 'Tag not found');
	}

	return {
		meta,
		tag,
		postsByTag,
		pageType: 'tag'
	};
};

import { tagsApi } from '$lib/api';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { MainPostPreview } from '../../../api-client';

export const load: PageServerLoad = async ({ parent, params }) => {
	const { meta } = await parent();

	let postsByTag: MainPostPreview[];
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

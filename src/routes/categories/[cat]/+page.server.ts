import { categoriesApi } from '$lib/api';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { MainPostPreview } from '../../../api-client';

export const load: PageServerLoad = async ({ parent, params }) => {
	const { meta } = await parent();

	let postsByCat: MainPostPreview[];
	const cat = params.cat;
	// api replaces / with _
	const catWithSwitchedSlash = cat.replace('/', '_');

	try {
		postsByCat = await categoriesApi.categoriesGet({
			category: catWithSwitchedSlash
		});
	} catch (apiError) {
		console.error(apiError);
		throw error(404, 'Category not found');
	}

	return {
		meta,
		cat,
		postsByCat,
		pageType: 'cat'
	};
};

import { categoriesApi } from '$lib/api';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { CategoriesGet200Response } from '../../../api-client';

export const load: PageServerLoad = async ({ parent, params }) => {
	const { meta } = await parent();

	let postsByCat: CategoriesGet200Response;
	const cat = params.cat;

	try {
		postsByCat = await categoriesApi.categoriesGet({
			category: cat
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

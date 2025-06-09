import { postsApi, previewsApi } from '$lib/api';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent, params }) => {
	const { meta } = await parent();

	const userPage = parseInt(params.number, 10);

	if (isNaN(userPage) || userPage < 1) {
		throw error(404, 'Page not found');
	}

	// api is zero indexed
	const apiPage = userPage - 1;

	const previews = await previewsApi.previewsGet({
		page: apiPage
	});

	if (previews.totalPages && userPage > previews.totalPages) {
		throw error(404, 'Page not found');
	}

	return {
		meta,
		previews,
		pageType: 'posts',
		currentUserPage: userPage
	};
};

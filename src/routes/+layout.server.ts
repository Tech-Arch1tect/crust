import { metadataApi } from '$lib/api';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	try {
		const meta = await metadataApi.metaJsonGet();
		return {
			meta
		};
	} catch (error) {
		console.error('Failed to fetch metadata:', error);
		return {
			meta: null,
			error: error instanceof Error ? error.message : 'Unknown error'
		};
	}
};

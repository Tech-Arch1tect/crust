import { writable } from 'svelte/store';
import { metadataApi } from '$lib/api';
import type { MainMetadataResponse } from '../../api-client';

function createMetaStore() {
	const { subscribe, set, update } = writable({
		data: null as MainMetadataResponse | null,
		loading: false,
		error: null as Error | null
	});

	return {
		subscribe,
		fetchMeta: async () => {
			update((state) => ({ ...state, loading: true, error: null }));
			try {
				const response = await metadataApi.metaJsonGet();
				set({ data: response, loading: false, error: null });
			} catch (error) {
				update((state) => ({ ...state, loading: false, error: error as Error }));
			}
		}
	};
}

export const metaStore = createMetaStore();

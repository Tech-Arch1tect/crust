import {
	BaseAPI,
	CategoriesApi,
	Configuration,
	MetadataApi,
	PostsApi,
	PreviewsApi,
	RelatedApi,
	SearchApi,
	TagsApi,
	querystring
} from '../api-client';

const basePath = import.meta.env.VITE_API_BASE_PATH || 'http://localhost:8080/api';

const configuration = new Configuration({
	basePath: basePath,
	queryParamsStringify: (params) => querystring(params).replace(/%2F/gi, '/')
});

export const api = new BaseAPI(configuration);
export const categoriesApi = new CategoriesApi(configuration);
export const metadataApi = new MetadataApi(configuration);
export const postsApi = new PostsApi(configuration);
export const previewsApi = new PreviewsApi(configuration);
export const relatedApi = new RelatedApi(configuration);
export const searchApi = new SearchApi(configuration);
export const tagsApi = new TagsApi(configuration);

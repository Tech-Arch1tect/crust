# PreviewsApi

All URIs are relative to *http://localhost:8080/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**previewsByPageGet**](PreviewsApi.md#previewsbypageget) | **GET** /previews/by-page | Get paginated previews |
| [**previewsBySlugGet**](PreviewsApi.md#previewsbyslugget) | **GET** /previews/by-slug | Get preview by slug |



## previewsByPageGet

> CategoriesGet200Response previewsByPageGet(page)

Get paginated previews

Get paginated post previews with optional page parameter

### Example

```ts
import {
  Configuration,
  PreviewsApi,
} from '';
import type { PreviewsByPageGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new PreviewsApi();

  const body = {
    // number | Page number (0-indexed) (optional)
    page: 56,
  } satisfies PreviewsByPageGetRequest;

  try {
    const data = await api.previewsByPageGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | Page number (0-indexed) | [Optional] [Defaults to `0`] |

### Return type

[**CategoriesGet200Response**](CategoriesGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated previews |  -  |
| **404** | Page not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## previewsBySlugGet

> PreviewsBySlugGet200Response previewsBySlugGet(slug)

Get preview by slug

Get a specific post preview by its slug

### Example

```ts
import {
  Configuration,
  PreviewsApi,
} from '';
import type { PreviewsBySlugGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new PreviewsApi();

  const body = {
    // string | Post slug
    slug: slug_example,
  } satisfies PreviewsBySlugGetRequest;

  try {
    const data = await api.previewsBySlugGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **slug** | `string` | Post slug | [Defaults to `undefined`] |

### Return type

[**PreviewsBySlugGet200Response**](PreviewsBySlugGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Single preview |  -  |
| **400** | Missing slug parameter |  -  |
| **404** | Preview not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


# PostsApi

All URIs are relative to *http://localhost:8080/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**postsByPageGet**](PostsApi.md#postsbypageget) | **GET** /posts/by-page | Get paginated posts |
| [**postsBySlugGet**](PostsApi.md#postsbyslugget) | **GET** /posts/by-slug | Get post by slug |



## postsByPageGet

> PostsByPageGet200Response postsByPageGet(page)

Get paginated posts

Get paginated posts with optional page parameter

### Example

```ts
import {
  Configuration,
  PostsApi,
} from '';
import type { PostsByPageGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new PostsApi();

  const body = {
    // number | Page number (0-indexed) (optional)
    page: 56,
  } satisfies PostsByPageGetRequest;

  try {
    const data = await api.postsByPageGet(body);
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

[**PostsByPageGet200Response**](PostsByPageGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated posts |  -  |
| **404** | Page not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postsBySlugGet

> PostsBySlugGet200Response postsBySlugGet(slug)

Get post by slug

Get a specific post by its slug

### Example

```ts
import {
  Configuration,
  PostsApi,
} from '';
import type { PostsBySlugGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new PostsApi();

  const body = {
    // string | Post slug
    slug: slug_example,
  } satisfies PostsBySlugGetRequest;

  try {
    const data = await api.postsBySlugGet(body);
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

[**PostsBySlugGet200Response**](PostsBySlugGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Single post |  -  |
| **400** | Missing slug parameter |  -  |
| **404** | Post not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


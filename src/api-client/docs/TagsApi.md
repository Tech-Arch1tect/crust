# TagsApi

All URIs are relative to *http://localhost:8080/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**tagsGet**](TagsApi.md#tagsget) | **GET** /tags | Get posts by tag |



## tagsGet

> CategoriesGet200Response tagsGet(tag, page)

Get posts by tag

Get paginated post previews for a specific tag

### Example

```ts
import {
  Configuration,
  TagsApi,
} from '';
import type { TagsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new TagsApi();

  const body = {
    // string | Tag name
    tag: tag_example,
    // number | Page number (0-indexed) (optional)
    page: 56,
  } satisfies TagsGetRequest;

  try {
    const data = await api.tagsGet(body);
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
| **tag** | `string` | Tag name | [Defaults to `undefined`] |
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
| **200** | Paginated previews for tag |  -  |
| **404** | Tag not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


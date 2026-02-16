# RelatedApi

All URIs are relative to *http://localhost:8080/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**relatedGet**](RelatedApi.md#relatedget) | **GET** /related | Get related posts |



## relatedGet

> RelatedGet200Response relatedGet(slug)

Get related posts

Get related posts for a specific post by slug

### Example

```ts
import {
  Configuration,
  RelatedApi,
} from '';
import type { RelatedGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new RelatedApi();

  const body = {
    // string | Post slug
    slug: slug_example,
  } satisfies RelatedGetRequest;

  try {
    const data = await api.relatedGet(body);
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

[**RelatedGet200Response**](RelatedGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Related posts |  -  |
| **400** | Missing slug parameter |  -  |
| **404** | Post not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


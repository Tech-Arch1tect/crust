# SearchApi

All URIs are relative to *http://localhost:8080/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**searchIndexJsonGet**](SearchApi.md#searchindexjsonget) | **GET** /search/index.json | Get search index |



## searchIndexJsonGet

> SearchIndexJsonGet200Response searchIndexJsonGet()

Get search index

Get inverted search index for client-side search

### Example

```ts
import {
  Configuration,
  SearchApi,
} from '';
import type { SearchIndexJsonGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new SearchApi();

  try {
    const data = await api.searchIndexJsonGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**SearchIndexJsonGet200Response**](SearchIndexJsonGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Search index |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


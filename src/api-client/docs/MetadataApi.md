# MetadataApi

All URIs are relative to *http://localhost:8080/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**metaJsonGet**](MetadataApi.md#metajsonget) | **GET** /meta.json | Get API metadata |



## metaJsonGet

> MainMetadataResponse metaJsonGet()

Get API metadata

Get unified API metadata including counts, pagination info, and configuration

### Example

```ts
import {
  Configuration,
  MetadataApi,
} from '';
import type { MetaJsonGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new MetadataApi();

  try {
    const data = await api.metaJsonGet();
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

[**MainMetadataResponse**](MainMetadataResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | API metadata |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


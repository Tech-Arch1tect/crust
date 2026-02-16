# CategoriesApi

All URIs are relative to *http://localhost:8080/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**categoriesGet**](CategoriesApi.md#categoriesget) | **GET** /categories | Get posts by category |
| [**categoriesTreeJsonGet**](CategoriesApi.md#categoriestreejsonget) | **GET** /categories/tree.json | Get category tree |



## categoriesGet

> CategoriesGet200Response categoriesGet(category, page)

Get posts by category

Get paginated post previews for a specific category

### Example

```ts
import {
  Configuration,
  CategoriesApi,
} from '';
import type { CategoriesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new CategoriesApi();

  const body = {
    // string | Category path (e.g., tutorials/go)
    category: category_example,
    // number | Page number (0-indexed) (optional)
    page: 56,
  } satisfies CategoriesGetRequest;

  try {
    const data = await api.categoriesGet(body);
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
| **category** | `string` | Category path (e.g., tutorials/go) | [Defaults to `undefined`] |
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
| **200** | Paginated previews for category |  -  |
| **404** | Category not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## categoriesTreeJsonGet

> CategoriesTreeJsonGet200Response categoriesTreeJsonGet()

Get category tree

Get hierarchical category tree structure

### Example

```ts
import {
  Configuration,
  CategoriesApi,
} from '';
import type { CategoriesTreeJsonGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new CategoriesApi();

  try {
    const data = await api.categoriesTreeJsonGet();
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

[**CategoriesTreeJsonGet200Response**](CategoriesTreeJsonGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Hierarchical category tree |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


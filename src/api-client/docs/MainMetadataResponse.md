
# MainMetadataResponse

Unified API metadata including counts, pagination info, and configuration

## Properties

Name | Type
------------ | -------------
`categories` | [MainMetadataResponseCategories](MainMetadataResponseCategories.md)
`config` | [MainMetadataResponseConfig](MainMetadataResponseConfig.md)
`posts` | [MainMetadataResponsePosts](MainMetadataResponsePosts.md)
`previews` | [MainMetadataResponsePreviews](MainMetadataResponsePreviews.md)
`related` | [MainMetadataResponseRelated](MainMetadataResponseRelated.md)
`site` | [MainMetadataResponseSite](MainMetadataResponseSite.md)
`tags` | [MainMetadataResponseTags](MainMetadataResponseTags.md)

## Example

```typescript
import type { MainMetadataResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "categories": null,
  "config": null,
  "posts": null,
  "previews": null,
  "related": null,
  "site": null,
  "tags": null,
} satisfies MainMetadataResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MainMetadataResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



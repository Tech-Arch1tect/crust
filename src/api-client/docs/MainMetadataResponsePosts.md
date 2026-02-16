
# MainMetadataResponsePosts


## Properties

Name | Type
------------ | -------------
`newest` | { [key: string]: any; }
`oldest` | { [key: string]: any; }
`perPage` | number
`total` | number
`totalPages` | number

## Example

```typescript
import type { MainMetadataResponsePosts } from ''

// TODO: Update the object below with actual values
const example = {
  "newest": null,
  "oldest": null,
  "perPage": 10,
  "total": 42,
  "totalPages": 5,
} satisfies MainMetadataResponsePosts

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MainMetadataResponsePosts
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



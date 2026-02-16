
# MainMetadataResponseTags


## Properties

Name | Type
------------ | -------------
`perPage` | number
`stats` | { [key: string]: number; }
`total` | number
`totalPages` | number

## Example

```typescript
import type { MainMetadataResponseTags } from ''

// TODO: Update the object below with actual values
const example = {
  "perPage": 20,
  "stats": null,
  "total": 15,
  "totalPages": 1,
} satisfies MainMetadataResponseTags

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MainMetadataResponseTags
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)




# MainPaginationInfo

Pagination information for responses

## Properties

Name | Type
------------ | -------------
`hasNext` | boolean
`hasPrevious` | boolean
`nextPage` | number
`page` | number
`prevPage` | number
`totalItems` | number
`totalPages` | number

## Example

```typescript
import type { MainPaginationInfo } from ''

// TODO: Update the object below with actual values
const example = {
  "hasNext": true,
  "hasPrevious": false,
  "nextPage": 1,
  "page": 0,
  "prevPage": 0,
  "totalItems": 42,
  "totalPages": 5,
} satisfies MainPaginationInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MainPaginationInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



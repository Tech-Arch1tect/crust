
# MainErrorResponse

Error response format

## Properties

Name | Type
------------ | -------------
`error` | string
`message` | string

## Example

```typescript
import type { MainErrorResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "error": Not found,
  "message": The requested resource was not found,
} satisfies MainErrorResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MainErrorResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



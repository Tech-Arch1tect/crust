
# MainCategoryInfo

Category information including hierarchy and post associations

## Properties

Name | Type
------------ | -------------
`children` | Array&lt;string&gt;
`name` | string
`parent` | string
`path` | string
`postCount` | number
`postSlugs` | Array&lt;string&gt;

## Example

```typescript
import type { MainCategoryInfo } from ''

// TODO: Update the object below with actual values
const example = {
  "children": [golang, javascript],
  "name": Tutorials,
  "parent": tech,
  "path": tech/tutorials,
  "postCount": 2,
  "postSlugs": [getting-started-with-go, advanced-go-patterns],
} satisfies MainCategoryInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MainCategoryInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)




# MainRelatedPost

Related post information with similarity metrics

## Properties

Name | Type
------------ | -------------
`commonTags` | number
`date` | string
`readingTime` | number
`slug` | string
`title` | string

## Example

```typescript
import type { MainRelatedPost } from ''

// TODO: Update the object below with actual values
const example = {
  "commonTags": 3,
  "date": 2024-01-20,
  "readingTime": 8,
  "slug": advanced-go-patterns,
  "title": Advanced Go Patterns,
} satisfies MainRelatedPost

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MainRelatedPost
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



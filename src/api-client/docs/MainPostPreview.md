
# MainPostPreview

Post preview containing frontmatter, excerpt, and reading time

## Properties

Name | Type
------------ | -------------
`excerpt` | string
`frontmatter` | [MainFrontMatter](MainFrontMatter.md)
`readingTime` | number

## Example

```typescript
import type { MainPostPreview } from ''

// TODO: Update the object below with actual values
const example = {
  "excerpt": This is a brief excerpt of the post...,
  "frontmatter": null,
  "readingTime": 5,
} satisfies MainPostPreview

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MainPostPreview
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



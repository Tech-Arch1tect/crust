
# MainFrontMatter

Post frontmatter containing metadata

## Properties

Name | Type
------------ | -------------
`author` | string
`category` | string
`date` | string
`excerpt` | string
`slug` | string
`tags` | Array&lt;string&gt;
`title` | string

## Example

```typescript
import type { MainFrontMatter } from ''

// TODO: Update the object below with actual values
const example = {
  "author": John Doe,
  "category": tech/tutorials,
  "date": 2024-01-15,
  "excerpt": Learn the basics of Go programming language,
  "slug": getting-started-with-go,
  "tags": [golang, tutorial, beginner],
  "title": Getting Started with Go,
} satisfies MainFrontMatter

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MainFrontMatter
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



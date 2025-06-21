# Chunk String

## Instructions

Write a JavaScript function that takes in a string and a number representing the chunk length. The function should return an array of strings, where each string is a chunk of the original string with length equal to the given number, except for the last chunk, which may be shorter.

## Examples

```
chunkString("Hello, world!", 5) // ["Hello", ", wor", "ld!"]
chunkString("12345", 2) // ["12", "34", "5"]
chunkString("abc", 5) // ["abc"]
```

## Constraints

- The input string will have at most length 10^6.
- The input chunk length will be a positive integer.

## Acceptance Criteria

- If the input string is null, the function should return an empty array.
- The function should return an array of strings, where each string is a chunk of the original string with length equal to the given number, except for the last chunk, which may be shorter.

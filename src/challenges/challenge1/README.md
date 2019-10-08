# Array reverse

## Taks Description

Array reverse is the operation of reversing an array. The first element becomes the last and the last element becomes the first and so on. e.g Consider having the following array: [4,3,9,5,23], it's reverse would be [23,5,9,3,4]

Write a function:

```
function solution(arr) {
  ...YOU_CODE_HERE
}
```

that, given a zero-indexed unsorted array A consisting of N integers, returns the reverse of that array using the most effecient way and without using any library or predefined methods

For example:
* given array A = [5,8,-1,7,9], the solution should return [9,7,-1,8,5]
* given array A = [4,4,4,4] the solution should return [4,4,4,4]
* given array A = [3,3,9,2] the solution should return [2,9,3,3]
* given array A= [9] the solution should return [9]

Assume that:
* N is integer within the range [0..1,000]
* each element of array A is an integer within the range [-2147483648..2147483648].
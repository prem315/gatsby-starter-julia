---
title: "Javascript Addition Operator (+)"
date: "2020-04-04"
draft: false
path: "/blog/javascript-addition-operator"
---

## Javascript Addition Operator

You might have encounterd in javascript when you try to add string into number, it concatinates rather throwing error. Why is that?

```js
10 + "10" // 1010
```

Because whenever one operand is string and other operand is number, Js converts number into string and then concatinates. So whenver you encounter (+) operator in JS, (+) operator either performs string concatenation or numeric addition.

Rules

- If at least one operand is Object type(obj, array, date), Js converts into primitive types(string, number or boolean).
- After conversion, if both operands are primitive types but different primitive type, Js converts into String or number and then either performs concatinates or numeric operation.
  - if one operand is number, js converts other operand into number.
  - if one operand is string, js converts other operand into string.
- If both operands converted into number, Js performs numeric addition.

Before we jump into examples, Let's try to understand how to convert non primitives into primitives.
Two methods are used to convert non-primitives into primitives.

    1. toString()
    2. valueOf()

Examples

```js
var today = new Date()
var number = 10
var result = today + number
console.log(result)
```

What do you think should be the result? It will give you string "Sat Apr 04 2020 15:01:55 GMT+0530 (India Standard Time)10"

(check the rules for reference)
First JS converts date into string and converts number into string and then concatinates.

```js
20 + "20" // "2020" (converts number into string and then concatinates)
```

```js
20 + true // 21
// one operand is number so Js converts true into number, which is 1
```

```js
20 + false // 20
// false become 0 and then two operands are number so js performs numeric operation
```

```js
20 + "false" // "20false"
// one operand is string so converts other operand into string and then performs
// string concatination.
```

```js
20 + undefined // NaN
// one operand is number so JS converts undefined into number which is NaN
// you can check by Number(undefined) in the browser
// any number + NaN gives you NaN
```

```js
20 + null // 20
// one operand is string so Js converts null into number which is 0.
// you can check typing Number(null) in the browser console.
// 20 + 0 = 20
```

```js
20 + "null" // "20null"
// I know you guys must have figured it out the answer.
```

Below examples are addition operator on primitive with non-primitve(Object) types.

```js
20 + {} // "20[object Object]"
// Check rule number 1
// Js converts non-primitives into primitives
// String({}) gives you "[object Object]"
// Now we have a 20 + "[object Object]"
// number will be converted into string and then concatinates
```

```js
20 + [] // "20"
// here also apply rule no 1
// String([]) gives you "" (empty string)
// 20 + ""
// 20 gets converted into "20"
// "20" + ""
// "20"
```

```js
;[1, 2] + 20 // "1,220"
// String([1,2]) gives you "1,2"
// "1,2" + 20
// "1,2" + "20"
// "1,220"
```

```js
20 + [1, 2, 3] // "201,2,3"
// You must have figured it out the answer.
```

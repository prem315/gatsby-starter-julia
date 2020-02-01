---
title: "Primitive and Reference Types"
date: "2019-12-11"
draft: false
path: "/blog/primitive-and-reference-types"
---

## Primitive and Reference Type under the hood
As we know, Javascript is a dynamic type language and it doesn't have strong typing. Although javascript doesn’t have classes still uses two types. 

    1. Primitive Types
    2. Reference Types

Primitive types are stored as directly into variables and reference types are stored as objects which are just references in a memory.

Javascript provides six different primitive types undefined, null, boolean, number, string and symbol. When you assign a primitive value to a variable, javascript stores value directly to a variable and variable gets its own copy in a memory.

```js
var a = 10;
var b = a;
```

Here when we assign variable b and gives primitive value a(variable), variable b also gets its own copy in a memory. 

We can identify primitive values using typeof operator.

```js
console.log(typeof "Prem") // String
console.log(typeof 10) // number
console.log(typeof true) // boolean
console.log(typeof undefined) // undefined
console.log(typeof null) // object
```

You might ask why typeof null is an object? This is because spec says so. This is a long-standing bug in the javascript and it is acknowledged by the ECMAScript focks. 

So if you want to check the value of a variable is null or not.
Use console.log(value === null) → true

Reference types are just the objects in javascript. Reference types are the instances of a particular in-built objects(Object, Array).

There are 5 types of references in javascript
Array, Object, Error, RegExp, Date

There are two ways we can create an object. Objects are the key value pairs. 

```js
var my_obj = {}
var obj = new Object()
``` 

We can create an object with a curly brackets or we can create an object with new keyword.
So when you create an object, it doesn’t directly store object data inside a variable rather it points in a memory where object lives. 

```js
var obj1 = new Object()
var obj2 = obj1
Obj1.name = "Prem"

console.log(obj2.name); // "Prem"
```



We haven’t added any property to obj2. So why this is happening? Its because obj1 and obj2 have the same references in a memory. 

The easiest way to identify function reference type is using a typeof.
```js
function fun() {	
	return "fun"
} 
console.log(typeof fun) → Function
```

Identifying object
```js
var obj = { name: "Prem" }
console.log(obj instanceof Object) // true
```

Identifying array
```js
var names = ["Prem", "Divye", "Jay"]
console.log(names instanceof Array) // true
console.log(names instanceof Object) // true
```

Why this is happening ? because javascript array is a reference type and its an array object in a global memory. It inherited from the global object Array. Because of this confusion new version of javascript added a new method to identify array.
```js
console.log(Array.isArray(names)) // true
```

Primitive methods 
The key difference between primitive and reference type is primitive stores only single value but reference type can store multiple values.

If this was the case, why numbers and strings have methods on it?
Its because when we create a string or number, it creates special temporary object or object wrapper.

Let’s take a example
```js
var name = "Prem"
console.log(name.toUpperCase()) // PREM
```
To understand this problem, we need to understand how javascript engine runs this code.

First javascript assign variable in a memory.
The string name is a primitive. So in the moment of accessing its property, a special object is created that knows the value of the string, and has useful methods, like toUpperCase().
 

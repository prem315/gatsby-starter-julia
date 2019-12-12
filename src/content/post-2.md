---
title: "Function declarations vs function expresions"
date: "2019-12-13"
draft: false
path: "/blog/function-declarations-vs-function-expresions"
---

## Function declarations vs function expresions under the hood
Before we deep dive into function declaration and expression, we should understand the definition of declaration and expression.

So what is expression in javascript ?
It’s a piece of code that results into value.

```js
a = 3 // 3
```

When you assign some value to a, it returns 3. That’s an expression. 
When you type 2*2 in your browser, it returns 4. That’s an expression.

```js
2 * 2 // 4
```

What is declaration in javascript ?
Declarations are statements in javascript. Statements don’t return any value. There are many statements in javascript If statement, if else statement, function statement, switch statement and loop statement.

When you type if(a === 3), it's a statement. a===3 is an expression. a===3 either returns true or false. 

Now you understood what is expression and declaration. Lets define function expressions and function declaration.

```js
function func() {
    console.log("Hi i am javascript and i am weird.")
}  
```

This is an example of a function declaration or statement. You can call or invoke this function with func(). 

```js
function func() {
    console.log("Hi i am javascript and i am weird.")
} 
func() 
// “Hi i am javascript and i am weird.”
```

Now lets try to run the below code in your browser.

```js
func()
function func() {
    console.log("Hi i am javascript and i am weird.")
} 
// “Hi i am javascript and i am weird.”
```

When you run this func, it doesn’t result in a value. But this function is placed in a global memory when javascript interpreter reach that piece of code. And it doesn’t return a value until it gets invoked. That’s why this function statement gets hoisted or you can say this function is available ahead of time.Because of this phenomena you can call function before declaring a function.

```js
myFunc();
const myFunc = function() {
    console.log("Hi i am javascript and i am weird.")
} 
```

Lets try to run this code. You will encounter with the error. 
When javascript engine sees myFunc(), it goes and checks in a memory and it sees its undefined. Because javascript engine hasn’t reached the line where something is assigned to myFunc.

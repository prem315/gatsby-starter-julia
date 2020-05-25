---
title: "Event Bubbling vs Event Capturing"
date: "2020-05-25"
draft: false
path: "/blog/event-bubbling-vs-event-capturing"
---

## Event Bubbling vs Event Capturing

Event bubbling and capturing are the two ways to propagate events in the HTML DOM API.
So What is event bubbling ? Lets take an example of event bubbling before we understand the definition of event bubbling.

```js
<div class="outermostdiv">
  <div class="middlediv">
    <div class="innermostdiv" />
  </div>
</div>
```

Give some width and height to all divs and lets add click event to all three divs.

```js
document.querySelector(".outermostdiv").addEventListener("click", e => {
  console.log("outermostdiv is clicked")
})

document.querySelector(".middlediv").addEventListener("click", e => {
  console.log("middlediv is clicked")
})

document.querySelector(".innermostdiv").addEventListener("click", e => {
  console.log("innermostdiv is clicked")
})
```

Now try to click on the innermostdiv and see the result.
you would see the below result.

```js
innermostdiv is clicked
middlediv is clicked
outermostdiv is clicked
```

This kind of behavior is called event bubbling.

When an event happens on the element, the event is first captured and handled by the target element and then bubble up to the outermost element.

Now let's understand the event capturing.
With capturing, the event is first captured by the outermost element and goes till the inner most elements.

addEventListener take third argument as true/false,
default third argument is false which is same as bubbling.
Lets add third argument true to the eventlistner.

```js
document.querySelector(".outermostdiv").addEventListener(
  "click",
  e => {
    console.log("outermostdiv is clicked")
  },
  true
)

document.querySelector(".middlediv").addEventListener(
  "click",
  e => {
    console.log("middlediv is clicked")
  },
  true
)

document.querySelector(".innermostdiv").addEventListener(
  "click",
  e => {
    console.log("innermostdiv is clicked")
  },
  true
)
```

Now try to click on innermost div and see the result.

```js
outermostdiv is clicked
middlediv is clicked
innermostdiv is clicked
```

This kind of behavior is called event capturing. This is rarely used behavior.

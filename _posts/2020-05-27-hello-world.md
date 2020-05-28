---
layout: post
title: Hello World
---

Welcome to my website! This is simply the classic Hello World "program" (if you must) that computer scientists love to make whenever they start learning a new programming language. This is my first attempt at making a personal website/blog, and I would like to thank [mdo](https://twitter.com/mdo) for his great theme. 

Here's a code snippet to celebrate!

```typescript
let text : string = "Hello World";
let excitement : number = 7;

function celebrate(input : string, excite : number) : string {
    let bangs = ""
    for(i = 0; i < excite; i ++){
        bangs.concat('!';)
    }
	return input.concat(bangs)
}

console.log(celebrate(text, excitement));
```

Enjoy, and welcome!
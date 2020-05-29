---
layout: post
title:  "Hello World"
date: 2019-08-26 13:04:26 +0800
description: This is the classic Hello World post
---

Welcome to my website! This is simply the classic Hello World "program" (if you must) that computer scientists love to make whenever they start learning a new programming language. This is my first attempt at making a personal website/blog, and I would like to thank [wildfire](http://github.com/wild-flame/jekyll-simple) for his great theme. 

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


---
layout: post
title: Hello World
---

Welcome to my blog! I'll be writing up my thoughts and explorations in my journey to learn more about all sorts of interesting topics.

Here's a code snippet to celebrate! Programmed in Python 3, and if you want to see what it does, just copy it into your favorite Python compiler!

```python
import math

def generate_pattern(size):
    pattern = [[' ' for _ in range(size)] for _ in range(size)]
    center = size // 2
    chars = [' ', '.', ':', '*', '#']

    for y in range(size):
        for x in range(size):
            dx = x - center
            dy = y - center
            r = math.hypot(dx, dy)
            angle = math.atan2(dy, dx)

            spiral = math.sin(r * 0.7 + angle * 5)
            value = int((spiral + 1) / 2 * (len(chars) - 1))
            pattern[y][x] = chars[value]

    return '\n'.join(''.join(row) for row in pattern)

print(generate_pattern(67))
```

Enjoy, and welcome!
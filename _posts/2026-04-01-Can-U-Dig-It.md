---
layout: post
title: Can U Dig It?
date: 2026-05-01 19:30:00-0400
description: Jane Street Puzzle, April 2026
tags: 
categories: puzzles
giscus_comments: true
related_posts: true
---

# [Puzzle](https://www.janestreet.com/puzzles/can-u-dig-it-index/)

<div class="col-12 mx-auto">
    {% include figure.liquid loading="eager" path="assets/img/blog/2026-04-01-Can-U-Dig-It/can_u_dig_it_image.jpg" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">
    Figure 1: The image for the April puzzle.
</div>

*(Apologies, but we’ve drawn a blank with this puzzle’s instructions. One thing we do know is that the answer is a positive integer...)*

# Solution

We are presented with what appears to be a word search, but with two twists: one letter has been replaced by a dash, and the puzzle asks for a positive integer.
My immediate instinct was to look for words. `find`, `trash`, and `fire` were all easy to spot, but it was not clear to me where to go from here.
At the same time, I noticed that the northeast corner had what appeared to be a jumbled version of `find the start`, while the south portion seemed to resemble `twenty-six`.
The latter somewhat reminded me of January's puzzle.

With no leads, the obvious next step was to find a lot more words. 
I used a [tool](https://wordsearchonline.com/tools/word-search-solver) to extract the text from the puzzle.[^1] 
Using a very long [list of English words](https://github.com/dolph/dictionary/blob/master/enable1.txt), I was able to extract terms in two categories: standard word search (straight lines) and snaking (any adjacent letters allowed).

Several words stuck out significantly: `hexadecimal`, `binary`, `integer`, `base ten`. 
Since I had already noticed that the "dig it?" in the title could be interpreted as "digit," I was able to figure out most of the words once I noticed `thumb` and `pinky` among the bank. Identifying the can-related words was a bit harder, but words like `aluminum` and `opener` helped me confirm I was on the right track.
After staring at the grid for a while, I realized that the digit terms were in the shape of an arch—or a U—constituting the third and final titular clue.
With this information, I was able to finish most of the grid, including the elusive `soda`-`hallux` pair.

To be honest, I never really finished finding all the words,[^2] but I was able to squint and make out "find the twentieth smallest number with digits totaling twenty-six." This task is trivial with some code; here is a Julia script for reference.

```julia
function digit_sum(n)
    total = 0
    while n > 0
        total += n % 10
        n ÷= 10
    end
    return total
end

counter = 1
numbers = []

while length(numbers) < 20
    if digit_sum(counter) == 26
        push!(numbers, counter)
    end
    counter += 1
end

println(numbers[end])
```

Of course, this gives us `3599`.

Looking back, I found this puzzle to be extremely difficult—perhaps too difficult for me, as I needed a fair amount of luck—but that made it all the more rewarding when I finally solved it.


[^1]:
    I originally typed it out manually, but I accidentally deleted my file and couldn't be bothered to do it a second time.

[^2]:
    For example, I found `pointer` and `pointerfinger` but did not notice `ege bamyasi`.
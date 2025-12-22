---
layout: post
title: Dogs Playing Poker
date: 2025-09-01 19:00:00-0400
description: Jane Street Puzzle, August 2025
tags: 
categories: puzzles
giscus_comments: true
related_posts: true
---

# [Problem](https://www.janestreet.com/puzzles/dogs-playing-poker-index/)
You won’t find poker faces here—these poor pups can’t hide their emotions or the cards that cause them! What they’re feeling is practically spelled out for everyone to see. It should be enough for you to figure out which cards my pet doodle is holding.

Submit your answer as an abbreviation of the cards using letters or numbers with the card then suit. For example, the Ace of Spades and Ten of Hearts would be abbreviated as **AS,10H**.

# Solution
The first thing to notice is that it is virtually impossible to figure out the dogs' emotions, as it is not immediately obvious whether they are positive or negative. After trying to take the problem literally without much success, I noticed that the penultimate dog seemed very familiar, which led me to realize that each dog represented a specific emoji. A Google search led me to an emoji [lookup website](https://emojipedia.org/), and I was able to solve the first part of the puzzle.

After struggling for couple more days, I focused on the next clue: "what they're feeling is practically spelled out for everyone to see." Then, I realized that the cards themselves could be indices for specific letters in the emoji names. By arranging the cards clockwise and using them to index into the emoji names, the message "shift by chip count" appeared.

| Emoji Name                         | Card 1 Value | Card 2 Value | Letters |
| ---------------------------------- | ------------ | ------------ | ------- |
| flu**sh**ed face                   | 4            | 5            | sh      |
| drool**i**ng **f**ace              | 6            | 9            | if      |
| cow**b**oy ha**t** face            | 9            | 4            | tb      |
| wooz**y** fa**c**e                 | 5            | 8            | yc      |
| angu**i**s**h**ed face             | 7            | 5            | hi      |
| **p**outing **c**at                | A=1          | 8            | pc      |
| conf**ou**nded face                | 5            | 6            | ou      |
| squin**t**i**n**g face with tongue | 8            | 6            | nt      |

Then, I noticed that each card had a chip stack next to it, and shifted each letter forward by the number of chips in the corresponding pile.

<div class="col-6 mx-auto">
    {% include figure.liquid loading="eager" path="assets/img/blog/chip_stacks.png" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">
    Figure 1: Chip Stacks with Count.
</div>

Doing so resulted in the message: "the canine of clubs."

| Letter | Stack Value | Shifted |
| ------ | ----------- | ------- |
| s      | 1           | t       |
| h      | 0           | h       |
| i      | 22          | e       |
| f      | 23          | c       |
| t      | 7           | a       |              
| b      | 12          | n       |
| y      | 10          | i       |
| c      | 11          | n       |
| h      | 23          | e       |
| i      | 6           | o       |
| p      | 16          | f       |
| c      | 0           | c       |
| o      | 23          | l       |
| u      | 0           | u       |
| n      | 14          | b       |
| t      | 25          | s       |

"Canine" is a homonym for K9, so our poodle's hand must be KC, 9C!

<div class="col-6 mx-auto">
    {% include figure.liquid loading="eager" path="assets/img/blog/k9_dog.jpg" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">
    Figure 2: K9 Dog.
</div>

This was my first Jane Street puzzle, and I really enjoyed working on it. I will probably give future ones a try as well.
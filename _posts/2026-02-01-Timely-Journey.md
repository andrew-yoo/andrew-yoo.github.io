---
layout: post
title: Timely Journey
date: 2026-02-01 15:30:00-0500
description: Jane Street Puzzle, January 2026
tags: 
categories: puzzles
giscus_comments: true
related_posts: true
---

# [Puzzle](https://www.janestreet.com/puzzles/robot-javelin-index/)

<div class="col-12 mx-auto">
    {% include figure.liquid loading="eager" path="assets/img/blog/timely_journey_image.jpg" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">
    Figure 1: The January 2026 Puzzle
</div>

# Solution

This month's puzzle was probably the hardest I've encountered so far. I first tried looking for clues in the provided image. Unfortunately, I was completely lost and never managed to find any of the hidden clues. That said, there were two main clues:

+ In the bottom of the image, the scrabble tiles and dominoes form a message: ```C J S 20 16 04``` $\implies$ ```See Jane Street 2016/04```.
+ In the top of the image, the plant, pentomino, and dice form a message: ```Thyme Z Ones``` $\implies$ ```Time Zones```.

In hidsight, I definitely should have found the first clue (though it luckily did not end up mattering too much). However, I don't fault myself for missing the second clue, since I barely knew what thyme was, let alone what it looked like.

Without anywhere obvious to begin, I turned to past puzzles for inspiration. After a very long time, I came across "Long. Journey" from April 2016—I had accidentally found the first clue to the puzzle! 

One of the first things I tried was plugging in combinations as coordinates. This of course did not work, and I was again stumped. But looking back at the 2016 puzzle, I realized that each number might represent only the latitude or longitude of a place. Of course, it would be impossible to find landmarks with only one coordinate, though, so there had to be another component. In the 2016 puzzle, the second component was that each landmark was a UNESCO World Heritage Site.

Eventually, after studying the puzzle's title, I realized that the second component was obvious all along: each site corresponds to a time zone. This is evidenced by the fact that there are twenty-four numbers, one for each hour of the day.

There was still the issue of finding the actual sites. After searching for helpful websites or software, I realized that Google Earth would be useful. In order to display time zones, I discovered a file format called [Keyhole Markup Language](https://en.wikipedia.org/wiki/Keyhole_Markup_Language), which seems to be standard for geography. Here is a convenient [KML file](https://github.com/livclan1/Google_Map_Time_zone) with time zones. Using these tools, I was able to find all 24 sites fairly quickly.

I initially thought that the crossword would be challenging. It turned out to be mostly trivial, though, as all the landmarks appear in order.

Finally, we can take the letters in the blue and red boxes, respectively:

<!--
$$\color{#00dcfa}{\text{REARKYBKAPNBLIAIADGLRDNZ}}$$

$$\color{red}{\text{ASCAAAEGHJIIKEGMNOSUMVRS}}$$
-->
<!-- Leaving the cursed MathJax here just in case -->

<center><span style="color:#00dcfa;">REARKYBKAPNBLIAIADGLRDNZ</span></center>
<center><span style="color:#ff0000;">ASCAAAEGHJIIKEGMNOSUMVRS</span></center>


And shift them (by the corresponding colored numbers) to read the following.

<!--
$$\color{#00dcfa}{\text{WHATREDLETTERSAREMISSING}}$$

$$\color{red}{\text{ABCDEFGHIJKLMNOPQRSUVWXY}}$$
-->

<center><span style="color:#00dcfa;">WHATREDLETTERSAREMISSING</span></center>
<center><span style="color:#ff0000;">ABCDEFGHIJKLMNOPQRSUVWXY</span></center>

The answer is, of course, the letters **T** and **Z**. As Jane Street points out, these are the the 20th and 26th letters in the alphabet, respectively, marking the first puzzle in 2026!
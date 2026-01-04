---
layout: post
title: Robot Javelin
date: 2026-01-03 18:30:00-0500
description: Jane Street Puzzle, December 2025
tags: 
categories: puzzles
giscus_comments: true
related_posts: true
---

# [Problem](https://www.janestreet.com/puzzles/robot-javelin-index/)

It’s coming to the end of the year, which can only mean one thing: time for this year’s **Robot Javelin** finals! Whoa wait, you’ve never heard of Robot Javelin? Well then! Allow me to explain the rules:

- It’s head-to-head. Each of two robots makes their first throw, whose distance is a real number drawn uniformly from $[0, 1]$.

- Then, without knowledge of their competitor’s result, each robot decides whether to keep their current distance or erase it and go for a second throw, whose distance they must keep (it is also drawn uniformly from $[0, 1]$).

- The robot with the larger final distance wins.

This year’s finals pits your robot, Java-lin, against the challenger, Spears Robot. Now, robots have been competing honorably for years and have settled into the Nash equilibrium for this game. However, you have just learned that Spears Robot has found and exploited a leak in the protocol of the game. They can receive a single bit of information telling them whether their opponent’s first throw (distance) was above or below some threshold d of their choosing before deciding whether to go for a second throw. Spears has presumably chosen d to maximize their chance of winning — no wonder they made it to the finals!

Spears Robot isn’t aware that you’ve learned this fact; they are assuming Java-lin is using the Nash equilibrium. If you were to adjust Java-lin’s strategy to maximize its odds of winning given this, what would be Java-lin’s updated probability of winning? Please give the answer in exact terms, or as a decimal rounded to 10 places.

# Solution
This puzzle can be split into three main parts, each requiring the solution to the last.

## Part 1: Standard Nash Equilibrium
We will first consider the original game: two players draw a random number from $[0,1]$. They can either keep their number or redraw it. The player with the higher number wins.

Since this is a symmetric game, there is a symmetric Nash equilibrium. Suppose your opponent picks $t$ as their withdraw threshold. The cumulative distribution function can be found.

$$CDF = \begin{cases}
tx & 0 \le x \le t\\
x + tx - t & t \le x \le 0
\end{cases}$$

Your winning probability can be calculated in the case that you redraw.

$$\begin{aligned}
W_{redraw} &= \int_{0}^{t} tx dx + \int_{t}^{1} (x + tx - t) dx\\ 
&= \frac{t^3}{2} + \left(\frac{1}{2} + \frac{t}{2} - t\right) - \left(\frac{t^2}{2} + \frac{t^3}{2} - t^2\right)\\ 
&= \frac{1}{2} + \frac{t^2}{2} - \frac{t}{2} \\ 
&= \frac{t^2 - t + 1}{2}
\end{aligned}$$

And in the case you keep. (Note that we set $x=t$ and use the CDF.)

$$\begin{aligned}
W_{keep} &= t(t) = t + t^2 - t\\
&= t^2
\end{aligned}$$

By applying the indifference principle, we can set the  equal to each other and solve for $t$.

$$\begin{aligned}
t^2 &= \frac{t^2-t+1}{2}\\
2t^2 &= t^2 - t + 1\\
0 &= -t^2 - t + 1\\
\end{aligned}$$

Disregarding the negative root, we have that $t^* = \frac{-1 + \sqrt{5}}{2} = \frac{1}{\varphi} \approx 0.618$.

For the sake of convenience, let $\phi = \frac{1}{\varphi}$.

## Part 2: The Exploit

Now that we have determined the Nash Equilibrium for the original game, we will now consider Spears Robot's strategy regarding the leak.

### Optimal $d$

We are told that Spears can can choose a value $d$; they will then be alerted whether their opponent's throw is above or below $d$. 

Intuitively, Spears will choose $d^* = \phi$ in order to maximize the information gained.[^bignote]

### Spears Robot's Strategy

Again, we can let $x$ be the value of Spears Robot's throw. Let $y$ be the value of Spears Robot's opponent's throw. If $y < d$, Spears Robot receives a FALSE signal; if $y > d$, Spears Robot receives a TRUE signal.

#### FALSE

If the signal returns FALSE, Spears Robot knows that their opponent will redraw and score in $\left[0,1\right]$. This means that Spears Robot will set their threshold, $t_{s}$ to maximize the expected value. Obviously, $t_{s}=\frac{1}{2}$ maximizes the EV.

#### TRUE

If the signal returns TRUE, Spears Robot knows their opponent will not redraw and will score in $\left[\phi, 1\right]$. 

$$CDF = \begin{cases}
0 & 0 \le y \le \phi \\
\frac{y - \phi}{1 - \phi} & \phi \le y \le 1
\end{cases}$$

If Spears Robot redraws:

$$\begin{aligned}
W_{redraw} &= \int_{0}^{\phi} 0 \ dy + \int_{\phi}^{1}\frac{1 - y}{1 - \phi} dy \\
&= 0 + \frac{1}{1 - \phi} \int_{\phi}^{1} (1-y) \ dy\\
&= \frac{1}{1 - \phi} \left[\left(1 - \frac{1}{2}\right)- \left(\phi - \frac{\phi^2}{2}\right)\right] \\
&= \left(\frac{1}{1 - \phi}\right) \left(\frac{1}{2} - \phi + \frac{1}{2}\phi^2\right)\\
&= \frac{1 - \phi}{2}
\end{aligned}$$

If Spears Robot keeps:

$$\begin{aligned}
W_{keep} &= \frac{t - \phi}{1 - \phi}
\end{aligned}$$

We can now apply the indifference principle and solve for $t_{s}$.

$$\begin{aligned}
\frac{1 - \phi}{2} &= \frac{t - \phi}{1 - \phi} \\
t - \phi &= \frac{\left(1 - \phi\right)^2}{2} \\
t &= \phi + \frac{1 - 2 \phi + \phi^2}{2}\\

\end{aligned}$$

Simplifying is annoying, but eventually we find that $t_{s} = 1 - \frac{\phi}{2}$ as the optimal threshold.

<div class="col-12 mx-auto">
    {% include figure.liquid loading="eager" path="assets/img/blog/robot_javelin_monte_carlo.png" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">
    Figure 1: Monte Carlo simulation of both cases (Spears Robot vs. Standard Nash Equilibrium).
</div>

The results of a monte carlo simulation are above. The red and green maxima are located at approximately $\frac{1}{2}$ and $1 - \frac{\phi}{2}$, respectively, verifying the calculations.

## Part 3: Java-lin's Counter

### Java-lin's Strategy

After figuring out that Spears Robot is cheating, Java-lin can optimize its strategy. Again, we let $y$ be the value of Java-lin's throw. If $y < d$, Spears Robot receives a FALSE signal; if $y > d$, Spears Robot receives a TRUE signal.

#### FALSE

If the signal is FALSE, then Spears Robot will play to maximize expected value. However, since this is a deviation from the Nash Equilibrium, it is punishable if Java-lin chooses an appropriate $t_{j}$.

Luckily, we have already calculated the winning probabilities in Part 1—all there is to do is substitute $t$.

First, we consider the case where Java-lin redraws.

$$\begin{aligned}
W_{redraw} &= \frac{t^2 - t + 1}{2} \\
&= \frac{\left(\frac{1}{2}\right)^2 - \frac{1}{2} + 1}{2} \\
&= \frac{\frac{1}{4} + \frac{1}{2}}{2} \\
&= \frac{3}{8}
\end{aligned}$$

Secondly, the case where Java-lin keeps.

$$\begin{aligned}
W_{keep} &= x + tx - t \\
&= \frac{3}{2}x -\frac{1}{2}
\end{aligned}$$

We can now set these equal to each other. (I haven't done a good job managing variables, so we do have to switch.)

$$\begin{aligned}
\frac{3}{8} &= \frac{3}{2}t - \frac{1}{2}\\
- \frac{3}{2} x &= - \frac{7}{8}\\
t &= \frac{7}{12}
\end{aligned}$$

So the optimal $t_{j} = \frac{7}{12}$.

#### TRUE

Since $\phi > \frac{7}{12}$ and Spears Robot's is using a better (i.e., closer to Nash) strategy, Java-lin should keep the original throw.

### Java-lin's Winning Probability

We can now calculate the final winning probability. There are three cases to consider.

#### Case 1: $y \in \left[0, \frac{7}{12}\right]$

Java-lin will redraw as Spears Robot expects.

$$W_1 = \int_{0}^{\frac{7}{12}} \frac{3}{8} dy $$

#### Case 2: $y \in \left[\frac{7}{12}, \phi\right]$

Java-lin will deviate from the Nash Equilibrium and keep, which goes against Spears Robot's expectation.

$$W_2 = \int_{\frac{7}{12}}^{\phi} \left(\frac{3}{2} y - \frac{1}{2}\right) dy$$

#### Case 3: $y \in \left[\phi, 1\right]$

Java-lin will keep as Spears Robot expects. This case is a little trickier to calculate, though: we know $y \in \left[\phi, 1\right]$ and Spears Robot is using the threshold $t = 1 - \frac{\phi}{2}$.

$$W_3 = \int_{\phi}^{1} \frac{5 \phi - 1}{8 \phi^2} dy$$

#### Final Derivation

We need to find $W_1 + W_2 + W_3$, but the $\phi$ terms make it messy. We turn to numerical integration.

Since the integrands are all linear, Gaussian quadrature will yield an exact result.

```python
from numericals.integrate import gaussian

conj_phi = (math.sqrt(5) - 1)/2

f1 = lambda y: 3/8
f2 = lambda y: 1.5 * y - 0.5
f3 = lambda y: (5 * conj_phi - 1) / (8 * (conj_phi ** 2))

int1 = gaussian(f1, 0, 7/12, 2) 
int2 = gaussian(f2, 7/12, conj_phi, 2)
int3 = gaussian(f3, conj_phi, 1, 2)

print(round(int1 + int2 + int3, 10))
```

The resulting winning probability is: ```0.4939370904```. So it seems like Java-lin would be better off reporting Spears Robot for cheating!

[^bignote]: 
    I am not convinced this rule applies for all $t^* \in [0,1]$; for example, the following two limits seem to apply. 
    
    $$\lim_{t^* \rightarrow 0} d^*(t^*) \overset{?}{=} \frac{1}{2}$$

    $$\lim_{t^* \rightarrow 1} d^*(t^*) \overset{?}{=} \frac{1}{2}$$
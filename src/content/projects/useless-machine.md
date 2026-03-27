---
title: "Useless Machine"
slug: "useless-machine"
year: 2023
summary: "A box that switches itself off once turned on.. made for the fun of it"
subtitle: "Multidisciplinary Personal Project"
tags: ["CAD", "3D Printing", "C++"]
heroImage: "/images/UBimg3.jpg"
---

## Overview

A box that switches itself off once turned on.. made for the fun of it.

## Problem

To make a useless machine inspired by online projects—a classic engineering novelty.

## Implementation

<div class="image-row">
  <figure><img src="/images/UBimg1.png" alt="Assembly" /><figcaption>Assembly</figcaption></figure>
  <figure><img src="/images/UBimg2.png" alt="Assembly 2" /><figcaption>Assembly 2</figcaption></figure>
</div>

Since this project didn't have constraints, I picked a small desk decoration size and drew up some prototypes.

The useless machine works by sending a signal to the Arduino Nano once the switch is powered on, which randomly runs logic for how a Servo with a hook attachment rotates to flick the switch back off.

I initially had a problem where the servo didn't provide enough torque to turn the switch off, so I shopped around for switches with a lower torque requirement.

I designed the box to be simple to manufacture and clean/discrete, with divots to conceal M3 screws and hidden electronics.

## Results

<div class="image-row">
  <figure><img src="/images/UBimg3.jpg" alt="Stage 1: Hidden" /><figcaption>Stage 1: Hidden</figcaption></figure>
  <figure><img src="/images/UBimg4.jpg" alt="Stage 2: Motion" /><figcaption>Stage 2: Motion</figcaption></figure>
  <figure><img src="/images/UBimg5.jpg" alt="Stage 3: Switch" /><figcaption>Stage 3: Switch</figcaption></figure>
</div>

The most difficult aspect was the C++ logic, where I wanted randomized switch-off methods: a quick switch, one that stalls for 5 seconds, and one that pretends to switch then disappears before actually switching. I also wanted the states to handle the switch being turned on mid-motion, using FSM logic.

Ultimately this was just a fun quick project that I thought would be funny given its absurdity.

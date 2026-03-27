---
title: "Word Limit Button"
slug: "word-limit-button"
year: 2023
summary: "A Staples 'Easy' button replica that emits an irritating high pitched noise when someone won't stop talking"
subtitle: "Multidisciplinary Personal Project"
tags: ["CAD", "3D Printing"]
heroImage: "/images/WLimg4.jpg"
---

## Overview

A Staples 'That was easy' button replica that emits an irritating high pitched noise when someone won't stop talking!

## Problem

I wanted to replicate the 'Easy' button from Staples in a quick project with parts that I had laying around. The primary objective was to have a simple noise mechanic and 3D print model.

## Implementation

<div class="image-row">
  <figure><img src="/images/WLimg1.png" alt="Main Base" /><figcaption>Main Base</figcaption></figure>
  <figure><img src="/images/WLimg3.png" alt="Casing" /><figcaption>Casing</figcaption></figure>
  <figure><img src="/images/WLimg2.png" alt="Button Cap" /><figcaption>Button Cap</figcaption></figure>
</div>

I had a passive buzzer and button switch that I wanted to use. The actual red button triggers the button switch while still going up and down.

The circuit was simple—the button controls whether current flows to the passive buzzer from a 9 volt battery. The current was far higher than the operating voltage range of 4V, so I used a 220 ohm resistor derived from basic circuit math.

My main focus was on the CAD design. One issue was printing tolerances, such as the red button part slotting perfectly between the casing. My Ender 3 Pro often requires accounting for different sizes when modeling, sometimes leading to excess test prints.

I've been focusing on incorporating fasteners into my projects rather than relying on adhesives. I used 2 screws to connect the base to the casing so that the battery could be easily replaced.

## Results

<div class="image-row">
  <figure><img src="/images/WLimg4.jpg" alt="Main Base" /><figcaption>Main Base</figcaption></figure>
  <figure><img src="/images/WLimg5.jpg" alt="Side View" /><figcaption>Side View</figcaption></figure>
  <figure><img src="/images/WLimg6.jpg" alt="Top View" /><figcaption>Top View</figcaption></figure>
</div>

I was able to make this in a few hours. My main takeaway was practicing how parts can interact with each other to form a greater system. Tolerances, friction, and internal electronics all had to be incorporated between sketches.

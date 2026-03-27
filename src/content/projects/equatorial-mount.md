---
title: "Automated Equatorial Mount"
slug: "equatorial-mount"
year: 2024
summary: "Automatic equatorial mount for astrophotography, tracking stars at 15° per hour for better long-exposure images"
subtitle: "Astrophotography Engineering Project"
tags: ["Mechanical Design", "Stepper Motors", "3D Printing", "CAD"]
heroImage: "/images/EQimg1.jpg"
---

## Overview

To enable long-exposure astrophotography with my Nikon D3300, I designed and built an automated equatorial mount that tracks the stars by rotating at 15° per hour. Instead of purchasing commercial solutions costing nearly $1000, I engineered my own cost-effective and customizable system.

## Problem

Long-exposure astrophotography requires precise tracking to prevent star trails caused by Earth's rotation. Without an equatorial mount, the camera cannot remain fixed on a celestial object, limiting the exposure time and light capture.

## Implementation

### Step 1: Research & Design
By aligning the mount's rotation axis with Polaris, which remains nearly stationary in the night sky, I could track celestial objects at 15° per hour. I opted for a NEMA17 stepper motor, but with a standard 1.8° step size, direct drive would be too imprecise and fast. To slow it down and increase precision, I incorporated an 8:1 gear ratio using pulley belts instead of 3D-printed gears to minimize backlash.

### Step 2: Mechanical Engineering Challenges
The camera's weight required sufficient torque, which the gear ratio helped address. Additionally, I incorporated counterweights for balance and altitude/azimuth adjustments for precise alignment. I also had to source appropriate bolts, including a standard tripod mount screw, to secure the camera.

### Step 3: Electronics & Control
The stepper motor was controlled via a simple driver circuit housed in a control box, powered by a portable power bank. Since the motor's current draw was minimal due to its slow operation, this solution provided portability without requiring heavy batteries.

## Results

<div class="image-large">
  <figure><img src="/images/EQimg1.jpg" alt="Final Built Mount" /><figcaption>Final Built Mount</figcaption></figure>
  <figure><img src="/images/EQimg2.png" alt="CAD Model of the Mount" /><figcaption>CAD Model of the Mount</figcaption></figure>
</div>

The final equatorial mount successfully tracked celestial objects, allowing for longer exposure times without star trails. This project deepened my understanding of stepper motor control, mechanical tolerances in 3D-printed components, and astrophotography techniques.

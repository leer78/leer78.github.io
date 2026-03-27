---
title: "Stepper Motor Controller"
slug: "stepper-motor-controller"
year: 2022
summary: "Controlled a stepper motor with full/half step, direction, and speed changes using STM32"
subtitle: "2TA4: Embedded Systems Design I"
tags: ["C++", "Circuitry"]
heroImage: "/images/SMCimg1.png"
---

## Overview

Used and programmed an STM32F429 MCU with a stepper motor. Experimented with how to drive the motor in full/half step mode and clockwise/counterclockwise direction, while controlling the speed of rotation.

## Problem

<div class="image-row">
  <figure><img src="/images/SMCimg1.png" alt="Final Physical Circuit" /><figcaption>Final Physical Circuit</figcaption></figure>
  <figure><img src="/images/SMCimg2.png" alt="Full Build Including Stepper Motor and STM MCU" /><figcaption>Full Build Including Stepper Motor and STM MCU</figcaption></figure>
</div>

Use stepper motor theory to control the outputs of a motor. Functionality should include step size changes, direction changes, and speed changes.

## Implementation

<div class="image-row">
  <figure><img src="/images/SMCimg3.png" alt="H-Bridge Diagram" /><figcaption>H-Bridge Diagram</figcaption></figure>
  <figure><img src="/images/SMCimg4.jpg" alt="Block Diagram" /><figcaption>Block Diagram</figcaption></figure>
  <figure><img src="/images/SMCimg5.png" alt="Sample Code" /><figcaption>Sample Code</figcaption></figure>
</div>

Followed the half bridge diagram with an SN754410NE H-bridge driver for main board wiring.

On the STM32, GPIO pin interrupts were triggered via buttons. Using two buttons, the first would define the edit state (0 for full/half step, 1 for cw or ccw, 2 for speed adjustment).

To control step sizes, only certain outputs would be set to HIGH and the remaining to LOW, which induced the rotor coils to align. To change direction, the outputs were reversed. To adjust speed, the timer prescaler values were increased/decreased.

## Results

I was able to apply course content to control a stepper motor. Reinforced my understanding of the design process and motor behaviour in response to MCU outputs.

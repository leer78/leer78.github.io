---
title: "RPi Controlled LED Strip"
slug: "rpi-led-strip"
year: 2022
summary: "Base LED controlled system using Raspberry Pi 4, LED light strips, and MOSFETs"
subtitle: "Multidisciplinary Personal Project"
tags: ["Python", "Circuitry"]
heroImage: "/images/RCLPimg1.png"
github: "https://github.com/leer78/RPi-4-Controlled-LED-Strip"
---

## Overview

This was a project to apply basic concepts learned from courses. I was inspired by numerous projects online that utilized old LED lights and thought controlling them with an RPi would be neat. Using a shell script, anything could be used to control the strip.

## Problem

<div class="image-row">
  <figure><img src="/images/RCLPimg1.png" alt="Final Setup + LEDs + Speaker" /><figcaption>Final Setup + LEDs + Speaker</figcaption></figure>
  <figure><img src="/images/RCLPimg2.png" alt="Wiring Diagram" /><figcaption>Wiring Diagram</figcaption></figure>
</div>

Find a way to effectively control LED lights on a large scale.

## Implementation

<div class="image-row">
  <figure><img src="/images/RCLPimg3.png" alt="Breadboard Wiring" /><figcaption>Breadboard Wiring</figcaption></figure>
</div>

The main focus was to practice using breadboards, wiring diagrams, and transistors. I spent a lot of time researching parts and their specific uses, with the MOSFET intriguing me the most.

The MOSFETs allow us to use the RPi to control the gates to where the voltage from the external power source goes to the LED lights. This must be done as the RPi itself cannot provide enough voltage through its GPIO pins.

### MOSFET Research
These metal–oxide–semiconductor field-effect transistors control power between the Drain & Source terminals. In a MOSFET, there are three pins: Source, Gate, and Drain. When a certain voltage is applied to the Gate, current flows between the Source and Drain—essentially acting as a switch.

There are two main types: p-type and n-type. An n-type uses a positive voltage at the gate, which I chose since the GPIO of a RPi 4 produces a positive voltage at the pins.

## Results

Using some basic research and tools, I was able to create a base LED controlled system that allows me to proceed with other projects. Using this as a template, fun events like lighting upon a sports team scoring or music matching are possible.

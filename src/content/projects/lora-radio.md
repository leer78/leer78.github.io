---
title: "LoRa Radio Multi Purpose Device"
slug: "lora-radio"
year: 2021
summary: "Fully functional radio setup using Arduino and LoRa for wireless communication across ~1km"
subtitle: "McMaster Rocketry Team"
tags: ["C++", "Circuitry"]
heroImage: "/images/LRMPDimg1.jpg"
---

## Overview

Originally designed following the airspayce RadioHead library for my LoRa radios. This was used for testing of the communication device we'd use for the McMaster Rocketry team.

The setup is used in some other projects I have, which allows me to complete tasks via radio signals and is quite flexible. An Arduino Uno and Nano are used as the RX and TX devices, communicating via LoRa radio modules.

## Problem

<div class="image-row">
  <figure><img src="/images/LRMPDimg1.jpg" alt="Nano Setup (RX)" /><figcaption>Nano Setup (RX)</figcaption></figure>
  <figure><img src="/images/LRMPDimg2.jpg" alt="Uno Setup (TX)" /><figcaption>Uno Setup (TX)</figcaption></figure>
</div>

Communicate between devices wirelessly across a large distance, and allow for modular additions to be made.

## Implementation

<div class="image-row">
  <figure><img src="/images/LRMPDimg3.png" alt="Nano Wiring" /><figcaption>Nano Wiring</figcaption></figure>
  <figure><img src="/images/LRMPDimg4.png" alt="Uno Wiring" /><figcaption>Uno Wiring</figcaption></figure>
</div>

To establish wiring diagrams between the LoRas and other boards, I completed research and followed several guides. I then programmed the Arduino boards in C++ using RadioHead library functions.

I faced some challenges, many of which were related to the code and learning to use the library. This was a new task for me, so I reached out to others and looked online for viable solutions.

## Results

After testing, the radio system works well for distances around 1 kilometer. What we are left with is a fully functional radio setup that allows me to proceed with other "wireless" connection projects!

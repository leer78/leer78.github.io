---
title: "Mars Rover"
slug: "mars-rover"
year: 2024
summary: "A Perseverance Rover replica with rocker-bogie suspension, 6-wheel drive, live camera feed, and wireless control"
subtitle: "Multidisciplinary Personal Project"
tags: ["3D Printing", "C++", "Embedded Systems", "Mechanical Design"]
heroImage: "/images/MRimg6.png"
youtube: "https://www.youtube.com/watch?v=rB0v62etmcA"
---

## Overview

<div class="image-large">
  <figure><img src="/images/MRimg6.png" alt="Render" /><figcaption>Render</figcaption></figure>
</div>

Inspired by my passion for space exploration, I set out to create a scaled-down functional replica of the Perseverance Mars rover. The goal was to replicate its key systems, including the rocker-bogie suspension, motorized wheels, and live camera module, while adapting the design to materials and components accessible for a hobbyist build.

## Problem

I wanted to develop a well-engineered, flushed-out robotic vehicle that mimicked the real Perseverance rover, with functional movement and control systems. The challenge was to scale down the design effectively while maintaining structural integrity and maneuverability.

## Implementation

### Step 1: Initial Research & Design
I started by analyzing a high-detail Blender model of the Perseverance rover found online. By capturing images of each face and measuring key dimensions, I determined an appropriate scale of 30:1. I designed the rocker-bogie suspension in CAD using copper pipes, tie rods, and bearings.

Material selection was a key aspect: structural parts were 3D printed using PLA+ for increased strength, aluminum profiles for the chassis, and TPU for the wheels to improve traction.

### Step 2: Manufacturing & Assembly

<div class="image-large">
  <figure><img src="/images/MRimg5.png" alt="CAD Model" /><figcaption>CAD Model</figcaption></figure>
</div>

The aluminum chassis required precise cutting and drilling using a drill press. 3D printing was a significant part of the process—I experimented with infill density, print orientation, and layer height. During assembly, I carefully aligned the rocker-bogie mechanism with bearings at pivot points to reduce friction.

### Step 3: Electronics & Control System

<div class="image-large">
  <figure><img src="/images/MRimg4.png" alt="Wiring diagram" /><figcaption>Wiring diagram</figcaption></figure>
</div>

A 12V LiPo battery served as the main power source, with a buck converter stepping down voltage for DC motors. Each wheel was powered individually via motor drivers. Steering was handled using servo motors. The rover was controlled wirelessly using a FlySky remote, with a stepper motor and servo for camera panning.

### Step 4: Testing & Optimization

<div class="image-row">
  <figure><img src="/images/MRimg1.jpg" alt="Partially built assembly with electronics" /><figcaption>Partially built assembly with electronics</figcaption></figure>
  <figure><img src="/images/MRimg2.jpg" alt="Rover moving around" /><figcaption>Rover moving around</figcaption></figure>
  <figure><img src="/images/MRimg3.jpg" alt="Live video feed from rover" /><figcaption>Live video feed from rover</figcaption></figure>
</div>

The suspension system was evaluated on different surfaces—gravel, grass, and uneven terrain. Motor speed and torque were adjusted through PWM tuning. The camera system was tested for latency, and steering responsiveness was refined.

## Results

The final rover was capable of navigating different terrains, steering dynamically, and streaming live video. Through numerous challenges—3D printing failures, motor driver issues, and debugging control signals—I developed a deeper understanding of multidisciplinary engineering.

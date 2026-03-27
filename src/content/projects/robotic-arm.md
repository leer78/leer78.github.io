---
title: "Robotic Arm + Haptic Glove"
slug: "robotic-arm-haptic-glove"
year: 2023
summary: "A robotic arm prosthetic controlled remotely via a haptic glove with wireless LoRa communication"
subtitle: "Personal Project"
tags: ["CAD", "3D Printing", "C++"]
heroImage: "/images/RAimg12.png"
youtube: "https://www.youtube.com/watch?v=eX1rG0Wb-Ko"
---

## Overview

<div class="image-row">
  <figure><img src="/images/RAimg12.png" alt="Render" /><figcaption>Render</figcaption></figure>
  <figure><img src="/images/RAimg13.png" alt="Render 2" /><figcaption>Render 2</figcaption></figure>
</div>

A robotic arm with fingers controlled via a haptic glove that I designed. The fingers clench using a fishing line controlled by servo motors, resisted by rubber strings. The haptic glove uses potentiometers and coiled springs to measure finger movement, which is then mimicked in the respective fingers.

The inspiration for this project was originally just making the robotic hand because I thought it would be a cool challenge. It was only when I was done the arm that I decided to have a better method of controlling it. A haptic glove meant for VR seemed like a great fit, as I'd be able to replicate my own movements in the arm.

Potential uses for the project include prosthetics or remotely operated robot end effectors.

## Problem

Make a robotic hand with controllable fingers. The approach should float between realistic and functional. Constraints included keeping the cost under $100 and being low maintenance once completed.

Later, the problem for the haptic glove was being able to control the fingers with some precision while also being somewhat practical to wear.

## Robotic Hand

### Part 1: Prototyping

<div class="image-row">
  <figure><img src="/images/RAimg1.jpg" alt="Initial Finger Designs" /><figcaption>Initial Finger Designs</figcaption></figure>
  <figure><img src="/images/RAimg2.jpg" alt="Test Rig" /><figcaption>Test Rig</figcaption></figure>
  <figure><img src="/images/RAimg3.jpg" alt="Finger and Palm Open" /><figcaption>Finger and Palm Open</figcaption></figure>
  <figure><img src="/images/RAimg4.jpg" alt="Finger and Palm Closed" /><figcaption>Finger and Palm Closed</figcaption></figure>
</div>

The most common and simplistic solution for clenching fingers was to use a fishing line which would be retracted, causing the fingers to fold on their joints. Some sort of elastic material would be used on the back of the fingers to return them to a straightened position.

I started by CADing each part of the finger (Distal, middle, and proximal phalanx) while focusing on functionality over aesthetics. The prints took many attempts to come to a usable model, due to issues such as stiff joints or line friction.

For the rubber material, I experimented with various items—rubber bands and elastic straps—but ultimately found that a stretchy bracelet string from a craft store worked best. The braided exterior had low friction while being strong enough to hold its shape.

One unique feature was incorporating ball bearings into the design at the joints to reduce the tension required to collapse the finger joints, while also reducing the friction that the fishing line would experience.

### Part 2: Palm + Forearm

<div class="image-row">
  <figure><img src="/images/RAimg8.jpg" alt="Servo Wheel Testing" /><figcaption>Servo Wheel Testing</figcaption></figure>
  <figure><img src="/images/RAimg7.jpg" alt="Servos + Forearm Casing" /><figcaption>Servos + Forearm Casing</figcaption></figure>
</div>

The primary mechanism is using servo motors. Since the MG90 servos were limited to 180 degrees, I used wheels. By calculating the line displacement needed, I determined the radius for the wheel to retract the line—decreasing the torque by applying the force at a distance.

Since I wanted one servo for an opposable thumb joint, I controlled the ring and pinky finger using the same motor. The platform was reinforced with brackets, and I made a shell casing attached with screws for easy access.

### Part 3: Programming
Using the Arduino servo.h library, I made stages with a FSM model. However, due to conflicts with the LoRa library, I had to implement my own PWM-based servo control.

## Haptic Glove

### Prototyping

<div class="image-row">
  <figure><img src="/images/RAimg5.jpg" alt="Badge Prototype" /><figcaption>Badge Prototype</figcaption></figure>
  <figure><img src="/images/RAimg6.jpg" alt="Potentiometer + Reel" /><figcaption>Potentiometer + Reel</figcaption></figure>
  <figure><img src="/images/RAimg11.jpg" alt="Glove Assembly" /><figcaption>Glove Assembly</figcaption></figure>
</div>

I used the potentiometer + badge reel spring method to measure finger displacement, challenging myself to CAD everything from scratch. The springs often bent at different points due to poor manufacturing, so I had to consider this in my design.

### Glove Assembly
I used small rings at each finger joint to keep the reel in line, and velcro straps for mounting the sensors to my hand.

### Coding + Control
I mapped potentiometer values to angles of the servo for precise finger control. My first wired system read the glove readings directly, but I also made a wireless version using LoRa radio. The RadioHead library had conflicts with Servo.h (low-level register interference), so I implemented my own PWM control.

To give the fingers a more realistic feel, I used a proportional controller. A threshold system where the glove output had to change by a specific amount prevented the fingers from being finicky.

## Results

<div class="image-row">
  <figure><img src="/images/RAimg9.png" alt="Top Assembly View" /><figcaption>Top Assembly View</figcaption></figure>
  <figure><img src="/images/RAimg10.png" alt="Back Assembly View" /><figcaption>Back Assembly View</figcaption></figure>
  <figure><img src="/images/robotArm.jpg" alt="Entire System" /><figcaption>Entire System</figcaption></figure>
</div>

Ultimately I ended up with a pretty cool robot hand system controllable from a distance. I was able to prototype, design, and print many parts, and program using concepts like serial communication and PWM. Possibilities for improvement include more precise control and a more functional arm (wrists and bicep).

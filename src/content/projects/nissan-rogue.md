---
title: "Model RC Nissan Rogue"
slug: "rc-nissan-rogue"
year: 2025
summary: "A 1:20 scale model of a Nissan Rogue with motor and geartrain, refined with stress analysis and shape optimization"
subtitle: "University Capstone Project"
tags: ["CAD", "FEA", "Gear Design", "Shape Optimization"]
heroImage: "/images/NRimg1.png"
---

## Overview

<div class="image-row">
  <figure><img src="/images/NRimg1.png" alt="Full Car Assembly" /><figcaption>Full Car Assembly</figcaption></figure>
  <figure><img src="/images/NRimg2.png" alt="View 2" /><figcaption>View 2</figcaption></figure>
  <figure><img src="/images/NRimg3.png" alt="View 3" /><figcaption>View 3</figcaption></figure>
</div>

I designed and engineered a 1:20 scale model of a Nissan Rogue SUV as part of a mechanical design course. The project followed a complete engineering design cycle: defining requirements, modeling systems in CAD, simulating behavior, optimizing structures, and generating manufacturable drawings. All motion was mechanically driven using a mid-mounted motor and gear train, without steering or electronic control modules.

## Problem

Design a mechanically driven RC car using constraints based on my student ID, including a mid-mounted motor, a 16:28 gear ratio, and SUV body type. The car had to be structurally sound under load, use realistic tolerances, and demonstrate manufacturability.

## Implementation

### Gear Train and Motor Assembly

<div class="image-row">
  <figure><img src="/images/NRimg4.png" alt="Frame Assembly" /><figcaption>Frame Assembly</figcaption></figure>
  <figure><img src="/images/NRimg5.png" alt="Spur Gear Ratio" /><figcaption>Spur Gear Ratio</figcaption></figure>
  <figure><img src="/images/NRimg6.png" alt="Miter Bevel Gear" /><figcaption>Miter Bevel Gear</figcaption></figure>
</div>

The drivetrain used bevel gears to redirect torque from the motor shaft by 90 degrees to the rear axle. I used Autodesk Inventor's gear generator to achieve the required 4:7 gear ratio using 20- and 35-tooth spur gears. I designed a custom shaft key and press-fit connections to link rotating parts, ensuring reliable torque transmission through the system.

### Vehicle Frame and Body
I modeled the vehicle shell based on orthographic views of a Nissan Rogue and scaled it to match a 1:20 ratio. The frame houses the drivetrain, battery pack, and wheel supports, and was modeled with tolerances to account for 3D printing and CNC manufacturing constraints.

## Engineering Analysis

### Motion Simulation
A full kinematic simulation of the drivetrain validated that the motor correctly rotated all gears and rear wheels through the specified gear ratio. The motor rotated 1000 degrees during the simulation, confirming uninterrupted torque transmission through all shafts and gear stages.

### Structural Stress Analysis

<div class="image-row">
  <figure><img src="/images/NRimg9.png" alt="Axel to Analyze" /><figcaption>Axel to Analyze</figcaption></figure>
  <figure><img src="/images/NRimg10.png" alt="Stress Map: low element mesh size" /><figcaption>Stress Map: low element mesh size</figcaption></figure>
  <figure><img src="/images/NRimg11.png" alt="Stress Map: high element mesh size" /><figcaption>Stress Map: high element mesh size</figcaption></figure>
</div>

To ensure the axles could withstand static and dynamic loads, I ran stress simulations assuming a total car weight of 1.2 kg. The shaft deflection converged to 0.0045 mm, and Von Mises stresses stayed below 7.1 MPa—well under the 95 MPa yield strength of aluminum 6061.

## Shape Optimization

<div class="image-row">
  <figure><img src="/images/NRimg14.png" alt="Stress Map on Frame" /><figcaption>Stress Map on Frame</figcaption></figure>
  <figure><img src="/images/NRimg15.png" alt="Optimized Shape" /><figcaption>Optimized Shape</figcaption></figure>
</div>

<div class="image-row">
  <figure><img src="/images/NRimg12.png" alt="Subtractive Manufacturing" /><figcaption>Subtractive Manufacturing</figcaption></figure>
  <figure><img src="/images/NRimg13.png" alt="Milling Simulation" /><figcaption>Milling Simulation</figcaption></figure>
</div>

I applied a static shape optimization to the vehicle frame to reduce weight and material usage while preserving structural integrity. Using Fusion 360's simulation workspace, I generated a stress map and removed low-stress regions, demonstrating a practical application of topological optimization.

## Results

<div class="image-large">
  <figure><img src="/images/NRimg16.png" alt="Exploded Assembly View" /><figcaption>Exploded Assembly View</figcaption></figure>
  <figure><img src="/images/NRimg7.png" alt="BOM" /><figcaption>BOM</figcaption></figure>
  <figure><img src="/images/NRimg17.png" alt="Exploded Assembly View - Frame" /><figcaption>Exploded Assembly View - Frame</figcaption></figure>
  <figure><img src="/images/NRimg18.png" alt="Engineering Drawing - Exterior" /><figcaption>Engineering Drawing - Exterior</figcaption></figure>
</div>

The completed model met all design requirements and performed as intended. I demonstrated a solid understanding of drivetrain mechanics, structural analysis, simulation techniques, and optimization. This project taught me how to balance precision with manufacturability and weight with strength.

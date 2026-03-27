---
title: "Strain Gauge Steering Column"
slug: "strain-gauge-steering-column"
year: 2023
summary: "A strain gauge system to measure torsional forces on the Baja Racing steering column"
subtitle: "McMaster Baja Racing"
tags: ["Data Acquisition", "Circuitry"]
heroImage: "/images/SGSCimg1.jpg"
---

## Overview

A strain gauge system used to measure torsional forces on our Baja Racing steering column. Used for real time data acquisition and future design considerations.

## Problem

The aim was to measure the torques experienced by the steering column in our Baja vehicle. The setup should also be easily applicable to other parts such as the tie rods and wheel axles.

## Implementation

### Step 1: Planning + Setup

<div class="image-row">
  <figure><img src="/images/SGSCimg4.png" alt="Torsional Strain" /><figcaption>Torsional Strain</figcaption></figure>
</div>

To measure purely axial forces, some research into orientation and positioning was done. Using a cross of 2 strain gauges on each side at a 45 degree angle and some math, we can ignore axial and shear forces.

Once the orientation was decided, the rods were sanded and cleaned, with an orientation template being applied. The measurement tools were then applied with glue and had wires soldered accordingly. The strain gauges themselves were quite hard to apply as the soldered connections were frail.

### Step 2: Testing

<div class="image-row">
  <figure><img src="/images/SGSCimg1.jpg" alt="Steering Column" /><figcaption>Steering Column</figcaption></figure>
  <figure><img src="/images/SGSCimg2.jpg" alt="Strain Gauge" /><figcaption>Strain Gauge</figcaption></figure>
  <figure><img src="/images/SGSCimg3.jpg" alt="Force Measurement" /><figcaption>Force Measurement</figcaption></figure>
</div>

To measure strain in each of the four strain gauges, the Wheatstone Bridge circuit had to be solved. The unknown electrical resistance was found by balancing legs.

With the physical setup complete, the next step was establishing a relationship between measured strain and applied torque. This was done using a torque wrench and tying known masses to a string wrapped around the rod.

With measurements plotted against applied loads, we developed a linear equation represented by Hooke's Law, giving us our calibration constants.

## Results

Ultimately, a system for measuring torques on various rods was established. This allowed us to measure the forces experienced in competitions and use them for future axle designs.

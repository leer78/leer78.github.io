---
title: "EscalAid Assistive Knee Brace"
slug: "escalaid"
year: 2025
featured: true
featuredLabel: "Featured Project (Ongoing)"
order: 2
summary: "Motorized knee brace supporting 40% body weight on stairs, using IMU gait analysis and PID control"
subtitle: "Mechatronics Capstone Project"
tags: ["Mechanical Design", "Embedded Systems", "PID Control", "Electrical Engineering", "Software Development"]
heroImage: "/images/MKBimg1.png"
youtube: "https://www.youtube.com/watch?v=041kRO6n0Zc"
---

## Background

<div class="image-large">
  <figure><img src="/images/MKBimg1.png" alt="Final Version" /><figcaption>Final Version</figcaption></figure>
  <figure><img src="/images/MKBimg4.png" alt="Final Build" /><figcaption>Final Build</figcaption></figure>
  <figure><img src="/images/MKBimg19.png" alt="Being Worn" /><figcaption>Being Worn</figcaption></figure>
</div>

The EscalAid knee brace is an electrically powered assistive device designed to support individuals with knee injuries during stair climbing. By applying controlled tension through a motorized winch system, it effectively reduces the perceived weight on the knee joint by approximately 40%. This design allows users to maintain control over their movement while receiving assistance, helping to mitigate pain and fatigue.

The primary target users for EscalAid are individuals suffering from ACL, MCL, LCL, or meniscus injuries, as well as those with chronic knee conditions such as tendonitis or tendinopathy. Unlike passive braces that merely provide stabilization, EscalAid actively assists in motion, making it a valuable tool for rehabilitation and mobility support.

The device features three operational modes: ascend, descend, and idle. In ascend mode, the brace applies lifting force during the step-up phase of stair climbing. In descend mode, it provides controlled resistance to ease the impact of stepping down. Idle mode disengages assistance, allowing free movement for activities such as walking and sitting.

## System Behaviour

EscalAid functions by dynamically adjusting cable tension based on real-time user movement. The system continuously monitors leg position and movement phase using an array of sensors. A PID-controlled motorized spool system maintains the desired tension, ensuring smooth assistance without abrupt force changes.

State transitions occur based on sensor inputs. For example, when ascending stairs, the brace detects when the leg reaches its lowest position and begins to lift, triggering the motor to apply upward force. The system automatically disengages at the peak of the movement, allowing the user to continue their natural gait.

To prevent unintended activation, the software includes safeguards that validate sensor readings and user intent. The system only engages when specific movement patterns are detected, avoiding interference with normal walking or sitting.

## System Design

EscalAid integrates multiple subsystems, each responsible for different aspects of operation. The control architecture consists of a central microcontroller that processes sensor data and executes motor control commands based on predefined logic.

The key hardware components include:

- **Winch system**: High-torque 12V worm gear motor and reinforced cable, controlled via PWM for precise speed adjustments
- **IMU sensors**: Real-time tracking of leg movement for gait phase determination, placed on thigh and shin
- **Hall Effect sensor**: Tracks spool rotation to measure cable extension and retraction accurately
- **Tension sensor**: Critical for force feedback control, enabling PID controller to make real-time adjustments

## Subsystems & Software Design

The software is structured into distinct modules, each handling a specific function of the system. The sensor processing module collects raw data from the IMU, tension sensor, and Hall Effect sensor, applying filtering techniques such as a complementary filter to reduce noise and improve accuracy.

<div class="image-row">
  <figure><img src="/images/MKBimg7.png" alt="MPU6050 IMU" /><figcaption>MPU6050 IMU</figcaption></figure>
  <figure><img src="/images/MKBimg8.png" alt="AS5600 Magnetic Encoder" /><figcaption>AS5600 Magnetic Encoder</figcaption></figure>
  <figure><img src="/images/MKBimg9.png" alt="Tension Sensor" /><figcaption>Tension Sensor</figcaption></figure>
  <figure><img src="/images/MKBimg10.png" alt="Arduino Mega" /><figcaption>Arduino Mega</figcaption></figure>
</div>

The state detection algorithm interprets sensor data to determine which phase of movement the user is in. This allows the system to predict when assistance is required and engage the motor accordingly.

<div class="image-row">
  <figure><img src="/images/MKBimg14.png" alt="IMU State Detection & Gait Analysis" /><figcaption>IMU State Detection & Gait Analysis</figcaption></figure>
</div>

The PID control loop continuously adjusts motor output to maintain the target tension level. This ensures that assistance is applied smoothly, adapting to the user's pace without introducing unwanted oscillations.

<div class="image-large">
  <figure><img src="/images/MKBimg12.png" alt="Control Flow" /><figcaption>Control Flow</figcaption></figure>
  <figure><img src="/images/MKBimg13.png" alt="PID Flow" /><figcaption>PID Flow</figcaption></figure>
</div>

## Mechanical Design

<div class="image-row">
  <figure><img src="/images/MKBimg2.png" alt="Rendered Version" /><figcaption>Rendered Version</figcaption></figure>
</div>

The mechanical structure of EscalAid was designed for both durability and user comfort. The brace frame was optimized to distribute load efficiently, preventing localized stress points that could cause discomfort or failure.

PLA-carbon fiber composite was chosen as the primary material for structural components due to its high tensile strength and lightweight properties.

## Electrical Design

The electrical system is centered around an Arduino Mega microcontroller, which manages all sensor inputs and motor control logic. A 12V LiPo battery serves as the primary power source, supplying energy to both the motor and control electronics.

To ensure stable operation, a buck converter regulates the voltage supplied to different components. The motor driver is rated for high current draw, allowing it to handle peak loads without overheating.

## Validation & Verification

<div class="image-row">
  <figure><img src="/images/MKBimg3.png" alt="Initial Prototype" /><figcaption>Initial Prototype</figcaption></figure>
  <figure><img src="/images/MKBimg17.png" alt="Initial Electronics" /><figcaption>Initial Electronics</figcaption></figure>
</div>

Extensive testing was conducted to validate the system's effectiveness and reliability. Load tests confirmed that the brace could provide up to 60 lbs of assistance without failure. Sensor calibration tests ensured that the IMU and Hall Effect sensors provided accurate readings, allowing for precise motion tracking.

## Results

<div class="image-large">
  <figure><img src="/images/MKBimg19.jpg" alt="Capstone Expo!" /><figcaption>Capstone Expo!</figcaption></figure>
  <figure><img src="/images/MKBimg18.jpg" alt="Live Demo" /><figcaption>Live Demo</figcaption></figure>
</div>

Through iterative design and testing, EscalAid has evolved into a highly functional assistive device that enhances mobility for individuals with knee impairments. The project demonstrates a full engineering cycle, incorporating problem identification, system modeling, prototyping, validation, and refinement.

Future improvements will focus on reducing weight further, optimizing battery efficiency, and exploring alternative materials for increased durability.

<div class="image-large">
  <figure><img src="/images/MKBimg15.png" alt="Me wearing the brace (revision 0)" /><figcaption>Me wearing the brace (revision 0)</figcaption></figure>
  <figure><img src="/images/MKBimg16.png" alt="Brace detail" /></figure>
  <figure><img src="/images/MKBimg5.png" alt="Me wearing the brace (final rev)" /><figcaption>Me wearing the brace (final rev)</figcaption></figure>
  <figure><img src="/images/MKBimg6.png" alt="Brace detail" /></figure>
</div>

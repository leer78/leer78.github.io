import React from 'react';
import '../page.css';

import { Link } from "react-router-dom";

import { FiArrowRight } from 'react-icons/fi';
import { FiArrowLeft } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const BR = () => {
    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <div className="banner">
                <h1>Ryan Lee - Project Portfolio</h1>
                <div className="buttons">
                    <Link to="/SolarExplorerProgram" id='button'><FiArrowLeft size={20} color='black' /></Link>
                    <Link to="/" id='button'><AiOutlineHome size={20} color='black' /></Link>
                    <Link to="/Escalaid" id='button'><FiArrowRight size={20} color='black' /></Link>
                </div>
            </div>
            <div className="ProjectContainer">
                <h1>McMaster Baja Racing</h1>
                <h2>Data Acquisition</h2>

                <h3>2022 - Present</h3>

                <div className="skillsTab">
                    <div className="skillItem">Mechanical Design</div>
                    <div className="skillItem">Manufacturing</div>
                    <div className="skillItem">3D Printing</div>
                    <div className="skillItem">Electronics</div>
                    <div className="skillItem">Telemetry</div>
                </div>


                <h4>Overview</h4>
                <p>
                    Baja SAE is an off-road racing competition where university teams design and build single-seat vehicles
                    to tackle extreme terrain. Data acquisition helps collect real-time vehicle data, allowing for performance
                    optimization and better tuning of vehicle components.
                </p>

                <h4>What is Data Acquisition?</h4>
                <p>
                    Data acquisition (DAQ) involves using sensors and embedded systems to collect critical performance data
                    from various parts of the Baja car. This includes RPM, throttle position, strain, suspension travel, and
                    brake pressure. The gathered data is analyzed to enhance the vehicle's reliability and efficiency.
                </p>

                <h4>Primary/Secondary CVT Sheave RPM</h4>
                <h5>What it is:</h5>
                <p>Tracks the rotational speed of the primary and secondary sheaves in the continuously variable transmission (CVT).
                    This data helps assess shifting performance and overall CVT efficiency, assisting in tuning the drivetrain for
                    optimal acceleration and power delivery.</p>
                <div className="ProjectImageContainer">
                    <figure><img src='/images/MBR_PRPMimg1.png' alt='' /><figcaption>Hall Effect Sensor Inside CVT Case</figcaption></figure>
                </div>
                <h5>How it works:</h5>
                <p>Originally, a hall-effect sensor and magnets were used, detecting pulses each time a magnet’s positive edge
                    passed the sensor. While effective, this method had reliability concerns due to magnet placement failures.
                    We transitioned to an inductive sensor mounted beside the brake rotor with strategically shaped cutouts,
                    eliminating the need for mounted magnets and increasing durability. This data is crucial for CVT tuning,
                    helping us determine engagement points and optimize shift curves.</p>


                <h4>Suspension Travel</h4>
                <h5>What it is:</h5>
                <p>Measures the movement of the suspension system to analyze damping characteristics and spring behavior,
                    providing insights into ride quality and handling performance.</p>
                <div className="ProjectImageContainer">
                    <figure><img src='/images/MBR_STimg1.png' alt='' /><figcaption>Magnet + Sensor Mount Assembly</figcaption></figure>
                    <figure><img src='/images/MBR_STimg2.png' alt='' /><figcaption>Calibrating for Fit Line</figcaption></figure>
                </div>

                <h5>How it works:</h5>
                <p>Utilizes bipolar hall-effect sensors to track the position of magnets mounted on the trailing link.
                    This allows us to correlate suspension compression with forces experienced on the chassis.
                    The data is used to tune spring rates and damping, ensuring the suspension system absorbs impacts effectively.
                    Additionally, it works alongside strain gauges on the anti-roll bar to optimize weight distribution
                    and reduce unnecessary chassis movement.</p>
                <div className="ProjectImageContainerLarge">
                    <figure><img src='/images/MBR_STimg3.png' alt='' /><figcaption>Validating Live Video Tests - Shake Test</figcaption></figure>
                    <figure><img src='/images/MBR_STimg4.png' alt='' /><figcaption>Validating Live Video Tests - Sharp Right Turns</figcaption></figure>
                </div>


                <h4>Sheave Position</h4>
                <h5>What it is:</h5>
                <p>Measures the exact position of the primary and secondary CVT sheaves to analyze gear ratio changes
                    and optimize shifting performance. Helps validate whether CVT behavior matches theoretical shift curves.</p>
                <div className="ProjectImageContainer">
                    <figure><img src='/images/MBR_SPimg1.png' alt='' /><figcaption>ToF Sensor Inside CVT Case, Secondary Sheave Side</figcaption></figure>
                </div>
                <h5>How it works:</h5>
                <p>We are integrating time-of-flight (ToF) sensors with ±0.1" accuracy to detect precise sheave movement.
                    This data, combined with wheel RPM, provides insights into CVT efficiency and engagement points.
                    Challenges include mounting inside the CVT case, ensuring robustness against vibration and heat, and
                    compliance with competition rules. Overcoming these obstacles will improve our ability to fine-tune gear ratios
                    and shifting performance.</p>

                <h4>Engine Runner Vibration & Seat Vibration</h4>
                <h5>What it is:</h5>
                <p>Measures engine mount vibrations and seat vibrations to optimize structural integrity and driver ergonomics.
                    Reducing excess vibrations improves power transfer and enhances driver comfort in long endurance races.</p>
                <div className="ProjectImageContainer">
                    <figure><img src='/images/MBR_ERimg1.png' alt='' /><figcaption>Engine Runner Mounts</figcaption></figure>
                    <figure><img src='/images/MBR_ERimg2.png' alt='' /><figcaption>Engine Runner Mounts</figcaption></figure>
                </div>
                <h5>How it works:</h5>
                <p>Accelerometers mounted on the engine runner measure vibration levels and detect resonance frequencies.
                    Fast Fourier Transform (FFT) is used to analyze frequency components, helping us optimize mount design
                    and weight savings while maintaining strength. A similar approach is used for seat vibration analysis,
                    where accelerometers assess driver fatigue due to prolonged exposure to vertical and horizontal oscillations.
                    The team is exploring rubber washers and different foam densities to mitigate excessive driver discomfort
                    over multi-hour races.</p>

                <div className="ProjectImageContainerLarge">
                    <figure><img src='/images/MBR_ERimg3.png' alt='' /><figcaption>Acceleration Magnitudes & Frequencies of seat foam, w/o washers, w washers</figcaption></figure>
                </div>

                <h4>Engine Dynamometer (Dyno)</h4>
                <h5>What it is:</h5>
                <p>A stationary test stand for tuning the engine and CVT without needing full vehicle testing.
                    Allows us to analyze power output, torque, and shifting behavior in a controlled environment.</p>
                <h5>How it works:</h5>
                <p>The engine is mounted onto a test stand equipped with a CVT, braking system, and throttle control.
                    Sensors track engine RPM, output torque (via strain gauges), and shifting behavior to fine-tune the CVT
                    without requiring an entire drive day. This setup significantly improves efficiency in testing
                    and provides precise data on shift curves, allowing us to optimize acceleration and power delivery.</p>


                <h4>Steering Column Angle</h4>
                <h5>What it is:</h5>
                <p>A Hall Effect sensor (AS5600) mounted on the steering column tracks the driver's steering angle using a diametrically magnetized magnet.
                    This data helps analyze steering performance, alignment drift, and driver effort.
                </p>
                <h5>How it works:</h5>
                <p>The AS5600 sensor detects the angular position of the magnet as the steering wheel turns, providing precise real-time feedback on steering input. This data is used alongside strain gauges on the steering column to evaluate steering resistance and optimize driver ergonomics.
                    It helps assess how easily the driver can achieve full lock in either direction and detect misalignment issues that could lead to handling inefficiencies. </p>

                <div className="ProjectImageContainer">
                    <figure><img src='/images/MBR_SRimg1.png' alt='' /><figcaption>AS5600 Sensor Mount</figcaption></figure>
                    <figure><img src='/images/MBR_SRimg2.png' alt='' /><figcaption>Mount on Steering Rack</figcaption></figure>
                    <figure><img src='/images/MBR_SRimg3.png' alt='' /><figcaption>Validating Steering Angles</figcaption></figure>
                </div>

                <h4>Throttle Position</h4>
                <h5>What it is:</h5>
                <p>Measures throttle pedal input to monitor driver acceleration behavior and ensure full throttle engagement during races.
                    This helps in preventing power loss, and ensuring drivers reach peak performance.</p>
                <h5>How it works:</h5>
                <p>A hall-effect sensor is mounted on the throttle pedal to detect its angular displacement.
                    This allows us to track throttle percentage in real time, ensuring the engine is receiving expected input.
                    Driver fatigue during endurance races can prevent full throttle application, so we implemented a light indicator
                    to alert drivers when they are not fully engaging the throttle, preventing unintentional power loss.</p>
                <div className="ProjectImageContainerLarge">
                    <figure><img src='/images/MBR_TPimg1.png' alt='' /><figcaption>Hall Effect Sensor + Throttle Control Handle</figcaption></figure>
                </div>
                <h4>Brake Fluid Pressure</h4>
                <h5>What it is:</h5>
                <p>Monitors hydraulic pressure in the brake lines to ensure the braking system is properly bled and functioning
                    at peak performance.</p>
                <h5>How it works:</h5>
                <p>Pressure transducers are installed inline with the brake lines to measure variations in brake fluid pressure.
                    This assists in verifying braking force consistency and helps the controls team optimize brake pedal feedback.
                    The system is also used during brake bleeding to ensure appropriate hydraulic pressure is maintained,
                    reducing inconsistencies in brake response.</p>


                <div className="ProjectImageContainer">
                    <figure><img src='/images/bajalogo2.jpg' alt='' /><figcaption></figcaption></figure>
                </div>

            </div>
        </>
    );
};

export default BR;
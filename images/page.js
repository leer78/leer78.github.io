import React from 'react';
import '../page.css';

import { Link } from "react-router-dom";

import { FiArrowRight } from 'react-icons/fi';
import { FiArrowLeft } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const MR = () =>{
    return(
        <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <div className="banner">  
            <h1>Ryan Lee - Project Portfolio</h1>
            <div className = "buttons">
                <Link to="/EQMount" id = 'button'><FiArrowLeft size = {20} color = 'black'/></Link>
                <Link to="/" id = 'button'><AiOutlineHome size = {20} color = 'black'/></Link>
                <Link to="/MacroKeypad" id = 'button'><FiArrowRight size = {20} color = 'black'/></Link>
            </div>
        </div>
        <div className="ProjectContainer">
        <h1>Mars Rover</h1>
<h2>Multidisciplinary Personal Project</h2>
<h3>2024</h3>

<div className="skillsTab">
    <div className="skillItem">3D Printing</div>
    <div className="skillItem">C++</div>
    <div className="skillItem">Mechanical Design</div>
    <div className="skillItem">Embedded Systems</div>
</div>

<h4>Overview</h4>
<p>Designed and built a scaled-down functional replica of NASA’s Perseverance Rover, incorporating mechanical, electronic, and software elements.</p>

<h4>Problem</h4>
<p>Wanted to create a flushed-out Mars rover replica, scaling down its functionality to match available resources while maintaining its fundamental design principles.</p>

<h4>Implementation</h4>
<h5>Step 1: Concept and CAD Design</h5>
<p>Started by analyzing an online Blender model of Perseverance Rover, capturing each face and taking measurements to scale it down 30:1.</p>
<p>Researched the rocker-bogie suspension system and modeled it in CAD using copper pipes, tie rods, and bearings.</p>
<p>Chassis designed using aluminum profiles for strength, with PLA+ and TPU 3D-printed components for structural parts and wheels.</p>
<div className='ProjectImageContainer'>
    <figure><img src='/images/MRimg5.png' alt=''/><figcaption>CAD Model of Rover</figcaption></figure>
</div>

<h5>Step 2: Manufacturing</h5>
<p>Fabricated mechanical components using a drill press to modify copper tubes for bolted joints and cut aluminum for the chassis.</p>
<p>Experimented with 3D print settings, including material selection, print orientation, infill percentage, and temperature optimization.</p>
<p>TPU was used for wheel treads to provide better terrain adaptability.</p>
<div className='ProjectImageContainer'>
    <figure><img src='/images/MRimg1.jpg' alt=''/><figcaption>Partially Built Rover Assembly</figcaption></figure>
</div>

<h5>Step 3: Electronics and Wiring</h5>
<p>Integrated a 12V LiPo battery with a buck converter to supply appropriate voltages to different components.</p>
<p>DC motors controlled the wheels, while servos managed wheel steering.</p>
<p>A FlySky remote system provided wireless control, and a live video module enabled real-time rover navigation.</p>
<p>Stepper motors and servos allowed camera panning for enhanced visibility.</p>
<div className='ProjectImageContainer'>
    <figure><img src='/images/MRimg4.png' alt=''/><figcaption>Wiring Diagram</figcaption></figure>
</div>

<h5>Step 4: Testing and Optimization</h5>
<p>Calibrated motor controllers for smooth operation and optimized power distribution.</p>
<p>Debugged the Ender 3 Pro printer multiple times to ensure consistent prints for structural parts.</p>
<div className='ProjectImageContainer'>
    <figure><img src='/images/MRimg2.jpg' alt=''/><figcaption>Rover Moving Around</figcaption></figure>
    <figure><img src='/images/MRimg3.jpg' alt=''/><figcaption>Live Camera Feed from Rover</figcaption></figure>
</div>

<h4>Results</h4>
<p>Successfully created a functional Mars Rover replica with a dynamic suspension system, motorized drive, remote control, and live video streaming.</p>
<p>Gained hands-on experience in mechanical fabrication, embedded systems, and real-world problem-solving related to robotics.</p>
</div>
        </>
    );
};

export default MR;
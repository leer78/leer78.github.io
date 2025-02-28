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

<div className ="skillsTab">
    <div className ="skillItem">3D Printing</div>
    <div className ="skillItem">C++</div>
    <div className ="skillItem">Embedded Systems</div>
    <div className ="skillItem">Mechanical Design</div>
</div>

<h4>Overview</h4>
<p>Inspired by my passion for space exploration, I set out to create a scaled-down functional replica of the Perseverance Mars rover. The goal was to replicate its key systems, including the rocker-bogie suspension, motorized wheels, and live camera module, while adapting the design to materials and components accessible for a hobbyist build.</p>

<h4>Problem</h4>
<p>I wanted to develop a well-engineered, flushed-out robotic vehicle that mimicked the real Perseverance rover, with functional movement and control systems. The challenge was to scale down the design effectively while maintaining structural integrity and maneuverability.</p>

<h4>Implementation</h4>
<h5>Step 1: Initial Research & Design</h5>
<p>I started by analyzing a high-detail Blender model of the Perseverance rover that I found online. By capturing images of each face and measuring key dimensions, I determined an appropriate scale of 30:1 for my build. This scaling ensured that components such as motors, tie rods, and structural elements remained practical while still resembling the original rover.</p>
<p>To understand the suspension system, I researched the rocker-bogie mechanism, which allows the rover to traverse rough terrain by passively adjusting its wheels to maintain stability. I designed this system in CAD using copper pipes, tie rods, and bearings to replicate the original design while keeping the parts accessible and easy to fabricate.</p>
<p>Material selection was a key aspect of the design process. Structural parts were designed to be 3D printed using PLA+ for increased strength, while aluminum profiles were chosen for the chassis due to their lightweight yet rigid properties. For the wheels, I opted to print them in TPU to improve traction and adaptability on uneven surfaces.</p>

<h5>Step 2: Manufacturing & Assembly</h5>
<p>With the design finalized, I moved on to fabrication. The aluminum chassis required precise cutting and drilling, which I accomplished using a drill press to create mounting points for the frame. Copper tubes were also drilled to accommodate bolts, ensuring secure connections for the rocker-bogie suspension.</p>
<p>3D printing was a significant part of the manufacturing process. I experimented with different print settings, adjusting infill density, print orientation, and layer height to balance strength and weight. My Ender 3 Pro required frequent troubleshooting, from bed leveling to optimizing extrusion settings, to produce consistent, high-quality prints.</p>
<p>During assembly, I carefully aligned the rocker-bogie mechanism, ensuring that all joints moved smoothly without excessive play. Bearings were added at pivot points to reduce friction and improve movement efficiency.</p>
<div className='ProjectImageContainer'>
<figure><img src='/images/MRimg5.png' alt=''/><figcaption>CAD Model</figcaption></figure>
</div>
<h5>Step 3: Electronics & Control System</h5>
<p>The electronics were designed to provide independent motor control for all six wheels, allowing the rover to navigate different terrains effectively. A 12V LiPo battery served as the main power source, with a buck converter stepping down the voltage for the DC motors.</p>
<p>Each wheel was powered by a DC motor controlled via motor drivers, ensuring smooth acceleration and direction control. Steering was handled using servo motors, allowing the wheels to change angle dynamically for improved maneuverability.</p>
<p>The rover was controlled wirelessly using a FlySky remote, providing real-time inputs for movement. A stepper motor and servo system were added to enable camera panning, allowing live video feedback from an onboard camera module. This setup mimicked the Perseverance rover’s ability to survey its surroundings.</p>
<div className='ProjectImageContainer'>
<figure><img src='/images/MRimg4.png' alt=''/><figcaption>Wiring diagram</figcaption></figure>
</div>
<h5>Step 4: Testing & Optimization</h5>
<p>Once assembled, I conducted extensive testing to fine-tune the performance. The suspension system was evaluated on different surfaces, including gravel, grass, and uneven terrain, to assess its ability to absorb shocks and maintain stability.</p>
<p>Motor speed and torque were adjusted through PWM tuning, ensuring smooth movement while preventing excessive power draw. The TPU wheels performed well in providing traction, though I experimented with different tread patterns to optimize grip on loose surfaces.</p>
<p>The camera system was tested for latency and signal quality, ensuring a reliable video feed. I also refined the steering responsiveness to improve the rover’s ability to navigate tight turns.</p>

<div className='ProjectImageContainer'>
    <figure><img src='/images/MRimg1.jpg' alt=''/><figcaption>Partially built assembly with electronics</figcaption></figure>
    <figure><img src='/images/MRimg2.jpg' alt=''/><figcaption>Rover moving around</figcaption></figure>
    <figure><img src='/images/MRimg3.jpg' alt=''/><figcaption>Live video feed from rover</figcaption></figure>
</div>

<h4>Results</h4>
<p>This project allowed me to gain hands-on experience in mechanical design, electronics integration, and system optimization. The final rover was capable of navigating different terrains, steering dynamically, and streaming live video—all key functionalities that scaled down the real Perseverance rover’s design.</p>
<p>Through numerous challenges, including 3D printing failures, motor driver issues, and debugging control signals, I developed a deeper understanding of multidisciplinary engineering. This experience reinforced my ability to take an idea from concept to reality through iterative design and problem-solving.</p>
<p>Ultimately, building this rover was a rewarding process that combined my interests in space exploration, robotics, and engineering design.</p>

</div>
        </>
    );
};

export default MR;
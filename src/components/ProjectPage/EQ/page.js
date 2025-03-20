import React from 'react';
import '../page.css';

import { Link } from "react-router-dom";

import { FiArrowRight } from 'react-icons/fi';
import { FiArrowLeft } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const EQ = () =>{
    return(
        <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <div className="banner">  
            <h1>Ryan Lee - Project Portfolio</h1>
            <div className = "buttons">
                <Link to="/RoboticArm+HapticGlove" id = 'button'><FiArrowLeft size = {20} color = 'black'/></Link>
                <Link to="/" id = 'button'><AiOutlineHome size = {20} color = 'black'/></Link>
                <Link to="/MarsRover" id = 'button'><FiArrowRight size = {20} color = 'black'/></Link>
            </div>
        </div>
        <div className="ProjectContainer">
    <h1>Automated Equatorial Mount</h1>
    <h2>Astrophotography Engineering Project</h2>
    
    <h3>2024</h3>

    <div className="skillsTab">
        <div className="skillItem">Mechanical Design</div>
        <div className="skillItem">Stepper Motors</div>
        <div className="skillItem">3D Printing</div>
        <div className="skillItem">CAD</div>
    </div>

    <h4>Overview</h4>
    <p>To enable long-exposure astrophotography with my Nikon D3300, I designed and built an automated equatorial mount that tracks the stars by rotating at 15° per hour. Instead of purchasing commercial solutions costing nearly $1000, I engineered my own cost-effective and customizable system.</p>

    <h4>Problem</h4>
    <p>Long-exposure astrophotography requires precise tracking to prevent star trails caused by Earth’s rotation. Without an equatorial mount, the camera cannot remain fixed on a celestial object, limiting the exposure time and light capture.</p>

    <h4>Implementation</h4>
    <h5>Step 1: Research & Design</h5>
    <p>By aligning the mount’s rotation axis with Polaris, which remains nearly stationary in the night sky, I could track celestial objects at 15° per hour. I opted for a NEMA17 stepper motor, but with a standard 1.8° step size, direct drive would be too imprecise and fast. To slow it down and increase precision, I incorporated an 8:1 gear ratio using pulley belts instead of 3D-printed gears to minimize backlash.</p>

    <h5>Step 2: Mechanical Engineering Challenges</h5>
    <p>The camera’s weight required sufficient torque, which the gear ratio helped address. Additionally, I incorporated counterweights for balance and altitude/azimuth adjustments for precise alignment. I also had to source appropriate bolts, including a standard tripod mount screw, to secure the camera.</p>

    <h5>Step 3: Electronics & Control</h5>
    <p>The stepper motor was controlled via a simple driver circuit housed in a control box, powered by a portable power bank. Since the motor’s current draw was minimal due to its slow operation, this solution provided portability without requiring heavy batteries.</p>

    <h4>Results</h4>
    <p>The final equatorial mount successfully tracked celestial objects, allowing for longer exposure times without star trails. This project deepened my understanding of stepper motor control, mechanical tolerances in 3D-printed components, and astrophotography techniques.</p>

    <div className='ProjectImageContainerLarge'>
        <figure><img src='/images/EQimg1.jpg' alt=''/><figcaption>Final Built Mount</figcaption> </figure>
        <figure><img src='/images/EQimg2.png' alt=''/><figcaption>CAD Model of the Mount</figcaption> </figure>
    </div>
</div>

        </>
    );
};

export default EQ;
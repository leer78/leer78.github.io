import React from 'react';
import '../page.css';

import { Link } from "react-router-dom";

import { FiArrowRight } from 'react-icons/fi';
import { FiArrowLeft } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const RA = () => {
    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <div className="banner">
                <h1>Ryan Lee - Project Portfolio</h1>
                <div className="buttons">
                    <Link to="/Escalaid" id='button'><FiArrowLeft size={20} color='black' /></Link>
                    <Link to="/" id='button'><AiOutlineHome size={20} color='black' /></Link>
                    <Link to="/RoboticArm+HapticGlove" id='button'><FiArrowRight size={20} color='black' /></Link>
                </div>
            </div>
            <div className="ProjectContainer">
                <h1>1:20 Scale Nissan Rogue RC Car</h1>
                <h2>University Capstone Project</h2>
                <h3>2025</h3>

                <div className="skillsTab">
                    <div className="skillItem">CAD</div>
                    <div className="skillItem">Gear Design</div>
                    <div className="skillItem">FEA</div>
                    <div className="skillItem">CAM</div>
                    <div className="skillItem">Shape Optimization</div>
                </div>

                <h4>Overview</h4>
                <p>
                    I designed and engineered a 1:20 scale model of a Nissan Rogue SUV as part of a mechanical design course. The project followed a complete engineering design cycle: defining requirements, modeling systems in CAD, simulating behavior, optimizing structures, and generating manufacturable drawings. All motion was mechanically driven using a mid-mounted motor and gear train, without steering or electronic control modules.
                </p>

                <div className='ProjectImageContainer'>
                    <figure><img src='/images/NRimg1.png' alt='' /><figcaption>Full Car Assembly</figcaption> </figure>
                    <figure><img src='/images/NRimg2.png' alt='' /><figcaption>View 2</figcaption> </figure>
                    <figure><img src='/images/NRimg3.png' alt='' /><figcaption>View 3</figcaption> </figure>
                </div>

                <h4>Problem</h4>
                <p>
                    Design a mechanically driven RC car using constraints based on my student ID, including a mid-mounted motor, a 16:28 gear ratio, and SUV body type. The car had to be structurally sound under load, use realistic tolerances, and demonstrate manufacturability, all without electrical steering or sensors.
                </p>

                <h4>Implementation</h4>
                <h5>Gear Train and Motor Assembly</h5>
                <p>
                    The drivetrain used bevel gears to redirect torque from the motor shaft by 90 degrees to the rear axle. I used Autodesk Inventor’s gear generator to achieve the required 4:7 gear ratio using 20- and 35-tooth spur gears. I designed a custom shaft key and press-fit connections to link rotating parts, ensuring reliable torque transmission through the system.
                    <div className='ProjectImageContainer'>
                        <figure><img src='/images/NRimg4.png' alt='' /><figcaption>Frame Assebly</figcaption> </figure>
                        <figure><img src='/images/NRimg5.png' alt='' /><figcaption>Spur Gear Ratio</figcaption> </figure>
                        <figure><img src='/images/NRimg6.png' alt='' /><figcaption>Miter Bevel Gear</figcaption> </figure>
                    </div>
                </p>

                <h5>Vehicle Frame and Body</h5>
                <p>
                    I modeled the vehicle shell based on orthographic views of a Nissan Rogue and scaled it to match a 1:20 ratio. The frame houses the drivetrain, battery pack, and wheel supports, and was modeled with tolerances to account for 3D printing and CNC manufacturing constraints.
                </p>

                <h4>Engineering Analysis</h4>
                <h5>Motion Simulation</h5>
                <p>
                    A full kinematic simulation of the drivetrain validated that the motor correctly rotated all gears and rear wheels through the specified gear ratio. The motor rotated 1000 degrees during the simulation, confirming uninterrupted torque transmission through all shafts and gear stages.
                </p>

                <h5>Structural Stress Analysis</h5>
                <p>
                    To ensure the axles could withstand static and dynamic loads, I ran stress simulations assuming a total car weight of 1.2 kg. Load was distributed across four contact points, and the resulting 2.94 N per bearing was modeled as a centralized force. The shaft deflection converged to 0.0045 mm, and Von Mises stresses stayed below 7.1 MPa—well under the 95 MPa yield strength of aluminum 6061. This analysis confirmed that the axle could support the full vehicle load with a high factor of safety.
                    <div className='ProjectImageContainer'>
                        <figure><img src='/images/NRimg9.png' alt='' /><figcaption>Axel to Analyze</figcaption> </figure>
                        <figure><img src='/images/NRimg10.png' alt='' /><figcaption>Stress Map: low element mesh size</figcaption> </figure>
                        <figure><img src='/images/NRimg11.png' alt='' /><figcaption>Stress Map: high element mesh size</figcaption> </figure>
                    </div>
                </p>

                <h4>Shape Optimization</h4>
                <p>
                    I applied a static shape optimization to the vehicle frame to reduce weight and material usage while preserving structural integrity. Loads were applied based on estimated weights of the motor, battery pack, and body shell. Using Fusion 360’s simulation workspace, I generated a stress map and removed low-stress regions from the top and side planes using targeted cutouts. This process highlighted the areas that contribute most to rigidity, allowing the design to maintain performance while improving material efficiency.
                    <div className='ProjectImageContainer'>
                        <figure><img src='/images/NRimg14.png' alt='' /><figcaption>Stress Map on Frame</figcaption> </figure>
                        <figure><img src='/images/NRimg15.png' alt='' /><figcaption>Optimized Shape</figcaption> </figure>
                    </div>
                </p>
                <p>
                    The optimized frame supports the same external loads but is lighter and more suited for additive manufacturing. This demonstrated a practical application of topological optimization to real-world design problems, balancing structural performance with manufacturability and cost.
                </p>
                <div className='ProjectImageContainer'>
                    <figure><img src='/images/NRimg12.png' alt='' /><figcaption>Subtracitive Manufacturing</figcaption> </figure>
                    <figure><img src='/images/NRimg13.png' alt='' /><figcaption>Milling Simulation</figcaption> </figure>
                </div>


                <h4>Testing</h4>
                <p>
                    Mesh sensitivity analysis confirmed the validity of simulation results, with consistent stress and deflection values across multiple refinements. CAM simulations verified manufacturability of small mechanical parts like the shaft key. Gear rotation and wheel behavior were tested in motion studies to ensure alignment and torque transfer.
                </p>

                <h4>Results</h4>
                <p>
                    The completed model met all design requirements and performed as intended. I demonstrated a solid understanding of drivetrain mechanics, structural analysis, simulation techniques, and optimization. This project reflects my engineering mindset—iterative, analytical, and focused on real-world performance. It taught me how to balance precision with manufacturability and weight with strength.
                </p>

                <h4>Engineering Drawings</h4>
                <p>
                    I created a detailed drawing package including multi-view drawings of all components, exploded views, assembly instructions, and bill of materials. The drawing set adhered to standard tolerancing practices and clearly documented critical dimensions and fits. It was generated entirely in Autodesk Inventor and would support full-scale fabrication.
                </p>

                <div className='ProjectImageContainerLarge'>
                    <figure><img src='/images/NRimg16.png' alt='' /><figcaption>Exploded Assembly View</figcaption> </figure>
                    <figure><img src='/images/NRimg7.png' alt='' /><figcaption>BOM</figcaption> </figure>
                    <figure><img src='/images/NRimg17.png' alt='' /><figcaption>Exploded Assembly View - Frame </figcaption> </figure>
                    <figure><img src='/images/NRimg18.png' alt='' /><figcaption>Engineering Drawing - Exterior</figcaption> </figure>
                </div>
            </div>


        </>
    );
};


export default RA;
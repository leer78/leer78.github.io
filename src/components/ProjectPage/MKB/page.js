import React from 'react';
import '../page.css';

import { Link } from "react-router-dom";

import { FiArrowRight } from 'react-icons/fi';
import { FiArrowLeft } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const MKB = () => {
    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <div className="banner">
                <h1>Ryan Lee - Project Portfolio</h1>
                <div className="buttons">
                    <Link to="/McMasterBajaRacing" id='button'><FiArrowLeft size={20} color='black' /></Link>
                    <Link to="/" id='button'><AiOutlineHome size={20} color='black' /></Link>
                    <Link to="/RCNissanRogue" id='button'><FiArrowRight size={20} color='black' /></Link>
                </div>
            </div>
            <div className="ProjectContainer">
                <h1>EscalAid Assistive Knee Brace</h1>
                <h2>Mechatronics Capstone Project</h2>

                <h3>2025</h3>

                <div className="skillsTab">
                    <div className="skillItem">Mechanical Design</div>
                    <div className="skillItem">Embedded Systems</div>
                    <div className="skillItem">PID Control</div>
                    <div className="skillItem">Electrical Engineering</div>
                    <div className="skillItem">Software Development</div>
                </div>


                <div className="YouTubeContainer">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/041kRO6n0Zc?si=KXNmWl2Urqvq5oOf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>


                <h4>Background</h4>
                <p>The EscalAid knee brace is an electrically powered assistive device designed to support individuals with knee injuries during stair climbing. By applying controlled tension through a motorized winch system, it effectively reduces the perceived weight on the knee joint by approximately 40%. This design allows users to maintain control over their movement while receiving assistance, helping to mitigate pain and fatigue.</p>
                <p>The primary target users for EscalAid are individuals suffering from ACL, MCL, LCL, or meniscus injuries, as well as those with chronic knee conditions such as tendonitis or tendinopathy. Unlike passive braces that merely provide stabilization, EscalAid actively assists in motion, making it a valuable tool for rehabilitation and mobility support.</p>
                <p>The device features three operational modes: ascend, descend, and idle. In ascend mode, the brace applies lifting force during the step-up phase of stair climbing. In descend mode, it provides controlled resistance to ease the impact of stepping down. Idle mode disengages assistance, allowing free movement for activities such as walking and sitting.</p>


                <div className='ProjectImageContainerLarge'>
                    <figure><img src='/images/MKBimg1.png' alt='' /><figcaption>Final Version</figcaption></figure>
                    <figure><img src='/images/MKBimg4.png' alt='' /><figcaption>Final Build</figcaption></figure>
                </div>
                <div className="YouTubeContainer">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/-kGofGQWPC4?si=y6EHZSykpyhgdmT9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <h4>System Behaviour</h4>
                <p>EscalAid functions by dynamically adjusting cable tension based on real-time user movement. The system continuously monitors leg position and movement phase using an array of sensors. A PID-controlled motorized spool system maintains the desired tension, ensuring smooth assistance without abrupt force changes.</p>
                <p>State transitions occur based on sensor inputs. For example, when ascending stairs, the brace detects when the leg reaches its lowest position and begins to lift, triggering the motor to apply upward force. The system automatically disengages at the peak of the movement, allowing the user to continue their natural gait. The same principle applies in descend mode, where the brace provides controlled resistance instead of lifting force.</p>
                <p>To prevent unintended activation, the software includes safeguards that validate sensor readings and user intent. The system only engages when specific movement patterns are detected, avoiding interference with normal walking or sitting. Additionally, the tension sensor ensures that excessive force is not applied, preventing strain on the knee.</p>

                <h4>System Design</h4>
                <p>EscalAid integrates multiple subsystems, each responsible for different aspects of operation. The control architecture consists of a central microcontroller that processes sensor data and executes motor control commands based on predefined logic.</p>
                <p>The key hardware components include:</p>
                <p>The winch system, consisting of a high-torque 12V worm gear motor and a reinforced cable, is responsible for applying assistive force. The motor is controlled via a pulse-width modulation (PWM) signal, allowing precise speed adjustments.</p>
                <p>The IMU sensors provide real-time tracking of leg movement, helping determine the user’s gait phase. These sensors are strategically placed on both the thigh and shin to capture angular velocity and acceleration.</p>
                <p>The Hall Effect sensor tracks spool rotation to measure cable extension and retraction accurately. This ensures that the applied force remains consistent throughout the movement cycle.</p>
                <p>The tension sensor is a critical component for force feedback control. By continuously measuring the force applied to the cable, it enables the PID controller to make real-time adjustments, preventing excessive or insufficient assistance.</p>

                <h4>Subsystems & Software Design</h4>
                <p>The software is structured into distinct modules, each handling a specific function of the system. The sensor processing module collects raw data from the IMU, tension sensor, and Hall Effect sensor, applying filtering techniques such as a complementary filter to reduce noise and improve accuracy.</p>
                <div className='ProjectImageContainer'>
                    <figure><img src='/images/MKBimg7.png' alt='' /><figcaption>MPU6050 IMU</figcaption></figure>
                    <figure><img src='/images/MKBimg8.png' alt='' /><figcaption>AS5600 Magnetic Encoder</figcaption></figure>
                    <figure><img src='/images/MKBimg9.png' alt='' /><figcaption>Tension Sensor</figcaption></figure>
                    <figure><img src='/images/MKBimg10.png' alt='' /><figcaption>Arduino Mega</figcaption></figure>
                </div>
                <p>The state detection algorithm interprets sensor data to determine which phase of movement the user is in. This allows the system to predict when assistance is required and engage the motor accordingly.</p>
                <div className='ProjectImageContainer'>
                    <figure><img src='/images/MKBimg14.png' alt='' /><figcaption>IMU State Detection & Gait Analysis</figcaption></figure>
                </div>
                <p>The PID control loop continuously adjusts motor output to maintain the target tension level. This ensures that assistance is applied smoothly, adapting to the user’s pace without introducing unwanted oscillations. During development, extensive tuning was performed to optimize PID coefficients, reducing response time and improving stability.</p>
                <p>The mode selection logic ensures seamless switching between ascend, descend, and idle modes. Safety checks are incorporated to prevent unintended activation, ensuring that the brace only engages when appropriate conditions are met.</p>
                <div className='ProjectImageContainerLarge'>
                    <figure><img src='/images/MKBimg12.png' alt='' /><figcaption>Control Flow</figcaption></figure>
                    <figure><img src='/images/MKBimg13.png' alt='' /><figcaption>PID Flow</figcaption></figure>
                </div>

                <h4>Mechanical Design</h4>
                <p>The mechanical structure of EscalAid was designed for both durability and user comfort. The brace frame was optimized to distribute load efficiently, preventing localized stress points that could cause discomfort or failure.</p>
                <p>PLA-carbon fiber composite was chosen as the primary material for structural components due to its high tensile strength and lightweight properties. This material provides the necessary rigidity to support the motor mount and bearing system while keeping overall weight manageable.</p>
                <p>One of the main design challenges was ensuring that the brace remained securely mounted to the leg while allowing flexibility for different body types. Adjustable straps and padding were incorporated to provide a secure yet comfortable fit.</p>

                <div className='ProjectImageContainer'>
                    <figure><img src='/images/MKBimg2.png' alt='' /><figcaption>Rendered Version</figcaption></figure>
                </div>

                <h4>Electrical Design</h4>
                <p>The electrical system is centered around an Arduino Mega microcontroller, which manages all sensor inputs and motor control logic. A 12V LiPo battery serves as the primary power source, supplying energy to both the motor and control electronics.</p>
                <p>To ensure stable operation, a buck converter regulates the voltage supplied to different components. The motor driver is rated for high current draw, allowing it to handle peak loads without overheating.</p>
                <p>All wiring is enclosed within protective sheathing to prevent accidental damage and ensure safety. Special attention was given to cable management, minimizing loose wires that could interfere with movement.</p>

                <h4>Validation & Verification</h4>
                <p>Extensive testing was conducted to validate the system’s effectiveness and reliability. Load tests confirmed that the brace could provide up to 60 lbs of assistance without failure. Sensor calibration tests ensured that the IMU and Hall Effect sensors provided accurate readings, allowing for precise motion tracking.</p>
                <p>Verification involved system checks and test suites designed to evaluate key performance metrics. These tests included response time measurements, force consistency analysis, and endurance trials under prolonged use.</p>
                <p>Feedback from expert evaluation highlighted areas for improvement, such as reducing device weight and refining PID control parameters. These insights were incorporated into the latest design iteration.</p>

                <h4>Version Comparison: Revision 0 vs. Current Revision</h4>
                <p>In the initial prototype (Revision 0), the motor was positioned further back, creating unnecessary torque on the brace and affecting user comfort. Additionally, exposed wiring posed safety risks, and the overall form factor was bulkier than desired.</p>
                <p>The current revision addresses these issues by repositioning the motor closer to the knee joint, reducing moment forces on the brace. Wiring has been enclosed within a compact housing, improving both safety and aesthetics. The overall profile of the brace has been refined, making it more ergonomic and less intrusive for the user.</p>

                <div className='ProjectImageContainer'>
                    <figure><img src='/images/MKBimg3.png' alt='' /><figcaption>Initial Prototype</figcaption></figure>
                    <figure><img src='/images/MKBimg17.png' alt='' /><figcaption>Initial Electronics</figcaption></figure>

                </div>

                <h4>Results</h4>
                <p>Through iterative design and testing, EscalAid has evolved into a highly functional assistive device that enhances mobility for individuals with knee impairments. The project demonstrates a full engineering cycle, incorporating problem identification, system modeling, prototyping, validation, and refinement.</p>
                
                <div className='ProjectImageContainerLarge'>
                    <figure><img src='/images/MKBimg19.jpg' alt='' /><figcaption>Capstone Expo!</figcaption></figure>
                    <figure><img src='/images/MKBimg18.jpg' alt='' /><figcaption>Live Demo</figcaption></figure>
                </div>

                <p>Future improvements will focus on reducing weight further, optimizing battery efficiency, and exploring alternative materials for increased durability. Additional software refinements will enhance responsiveness and adaptability to different user profiles.</p>

                <div className='ProjectImageContainerLarge'>
                    <figure><img src='/images/MKBimg15.png' alt='' /><figcaption>Me wearing the brace (revision 0)</figcaption></figure>
                    <figure><img src='/images/MKBimg16.png' alt='' /><figcaption></figcaption></figure>
                    <figure><img src='/images/MKBimg5.png' alt='' /><figcaption>Me wearing the brace (final rev)</figcaption></figure>
                    <figure><img src='/images/MKBimg6.png' alt='' /><figcaption></figcaption></figure>
                </div>



            </div>

        </>
    );
};

export default MKB;
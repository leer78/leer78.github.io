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
                    <Link to="/RCNissanRogue" id='button'><FiArrowLeft size={20} color='black' /></Link>
                    <Link to="/" id='button'><AiOutlineHome size={20} color='black' /></Link>
                    <Link to="/EQMount" id='button'><FiArrowRight size={20} color='black' /></Link>
                </div>
            </div>
            <div className="ProjectContainer">
                <h1>Robotic Arm + Haptic Glove</h1>
                <h2>Personal Project</h2>
                {/* <a href = "" target="_blank" id = 'externalLinkIconGithub'><AiFillGithub size = {25} color = 'rgb(16, 175, 159)'/></a> */}

                <h3>2023</h3>

                <div className="skillsTab">
                    <div className="skillItem">CAD</div>
                    <div className="skillItem">3D Printing</div>
                    <div className="skillItem">C++</div>
                </div>

                <h4>Overview</h4>
                <p>A robotic arm with fingers controlled via a haptic glove that I designed. The fingers clench using a fishing line controlled by servo motors, resisted by rubber strings. The haptic glove uses a potentiometer + coiled springs to measure the movement in fingers, which is then mimicked in the respective fingers.</p>
                <div className='ProjectImageContainer'>
                    <figure><img src='/images/RAimg12.png' alt='' /><figcaption>Render</figcaption> </figure>
                    <figure><img src='/images/RAimg13.png' alt='' /><figcaption>Render 2</figcaption> </figure>
                </div>

                <p>The inspiration for this project was originally just making the robotic hand because I thought it would be a cool challenge. It was only when I was done the arm that I decided to have a better method of controlling it, so I looked into methods of doing so. A haptic glove meant for VR seemed like a great fit, as I'd be able to replicate my own movements in the arm. </p>
                <p>Potential uses for the project include prosthetics or remotely operated robot end effectors.</p>

                <div className="YouTubeContainer">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/eX1rG0Wb-Ko?si=egeD9SAIwMs7qZoT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>


                <h4>Problem</h4>
                <p>Make a robotic hand with controllable fingers. The approach should float between realistic and functional. Some constraints included keeping the cost under $100, and being low maintenance once completed.</p>
                <p>Later, the problem I approached for the haptic glove was being able to control the fingers with some precision while also being somewhat practical to wear.</p>

                <h4>Implementation</h4>
                <h5>Robotic Hand Part 1: Prototyping</h5>
                <p>By the time of starting the project, I had done some research and gotten inspiration from existing robotic hands (after all, why reinvent the wheel?). It seemed like the most common and simplistic solution to how to clenching fingers was to use a fishing line which would be retracted, causing the fingers to fold on their joints. Some sort of elastic material would be used on the back of the fingers, which would cause the finger to return to its straightened position once tension in the line was loose.</p>
                <p>I started by CADing each part of the finger (Distal, middle, and proximal phalanx) while focusing on functionality over aesthetics. The prints took many attempts to come to a usable model, due to issues such as stiff joints or the line friction.</p>
                <p>Each of these issues were resolved after putting the finger together and retesting it. While I could've maybe put more thought into the entire design rather than make incremental improvements, I think that this highlighted the key aspect of 3D printing. Just how fast, cheap, and easy it is to prototype with 3D printing as opposed to other manufacturing methods.</p>
                <p>For the rubber material, I experimented with various items. I tried rubber bands and elastic straps, but ultimately I found that a stretchy bracelet string from a craft store worked best. The braided exterior meant it had low friction while still being strong enough to hold its shape for extended periods of time.</p>
                <p>One feature that I tried to make unique to existing models was incorperating ball bearings into the design. I used 2 at the joints to reduce the tension required to collapse the finger joints, while also reducing the friction that the fishing line would've experienced from the finger material.</p>
                <div className='ProjectImageContainer'>
                    <figure><img src='/images/RAimg1.jpg' alt='' /><figcaption>Initial Finger Designs</figcaption> </figure>
                    <figure><img src='/images/RAimg2.jpg' alt='' /><figcaption>Test Rig</figcaption> </figure>
                    <figure><img src='/images/RAimg3.jpg' alt='' /><figcaption>Finger and Palm Open</figcaption> </figure>
                    <figure><img src='/images/RAimg4.jpg' alt='' /><figcaption>Finger and Palm Closed</figcaption> </figure>
                </div>
                <p>In the second picture, I used a quick test rig consisting of a potentiometer that would allow me to control the angular displacement of the fishing line. I experimented with the clench patterns, maximum torque, and close speed.</p>
                <h5>Robotic Hand Part 2: Palm + Forearm</h5>
                <p>The primary mechanism for retracting the fishing line is using servo motors. Since the MG90 servos I bought were limited to rotating only 180 degrees, I had to get creative by using wheels. Since I measured the length that the line had to be displaced, I did some simple math to get the radius for the wheel to retract the line. This approach had the benefit of decreasing the torque (where if the line was just attached to the servo horn) by applying the force at a distance, but in turn meant that the space used increased drastically.</p>
                <p>Since the servos that I purchased only came in packs of 5 and I wanted to use one for an opposable thumb joint, I decided to control the ring and pinky finger using the same motor. This didn't feel like too much of an issue as they tend to move together anyways!</p>
                <p>The platform that all of the servos were connected to bent easily when retracting the fingers, so I designed brackets. This was the first time I incorperated screws into the design, as it made its also timetimes easier to print and assemble 3D printed items than it is to use them as a single piece. This leaves room for future adjustments without needing to redesign the entire piece.</p>
                <div className='ProjectImageContainer'>
                    <figure><img src='/images/RAimg8.jpg' alt='' /><figcaption>Servo Wheel Testing</figcaption> </figure>
                    <figure><img src='/images/RAimg7.jpg' alt='' /><figcaption>Servos + Forearm Casing</figcaption> </figure>
                </div>
                <p>I made a shell of the casing that would be attached to the servo plate using screws for easy access. I tried to give it a natural shape while also fitting the oddly positioned servo wheels.</p>
                <h5>Robotic Hand Part 3: Programming</h5>
                <p>Using the Arduino servo.h library, I made a few stages with a FSM model that the hand would iterate through to test functionality. However, as I will mention later, I had to use PWM to control the fingers!</p>

                <h5>Haptic Glove Part 1: Prototyping</h5>
                <p>For the glove, I mostly settled on a design based on this Youtube series:  <a href="https://www.youtube.com/watch?v=2yF-SJcg3zQ&ab_channel=LucasVRTech" target='_blank'>LucidVR Haptic Gloves</a></p>
                <p>As a very basic prototype to test the feasibility of this method, I just taped the badge reel to my fingers to mimick future usage.</p>
                <p>While I did use the potentiometer + badge reel spring method from the video to measure finger displacement, I challenged myself to CAD it from scratch. This was quite fun as this was an instance of taking the time to really think about mechanical parts and how they come together to work as intended. For instance, the springs often bent at different points due to poor manufacturing, so I had to consider this in my design.</p>
                <div className='ProjectImageContainer'>
                    <figure><img src='/images/RAimg5.jpg' alt='' /><figcaption>Badge Prototype</figcaption> </figure>
                    <figure><img src='/images/RAimg6.jpg' alt='' /><figcaption>Potentiometer + Reel</figcaption> </figure>
                    <figure><img src='/images/RAimg11.jpg' alt='' /><figcaption>Glove Assembly</figcaption> </figure>

                </div>

                <h5>Haptic Glove Part 2: Glove Assembly</h5>
                <p>Once I had a decent system for measuring finger displacement, I had to assemble the rest of the glove. I used small rings at each finger joint to keep the reel in line, and found some velco straps at the dollar store which worked well for mounting the sensors to my hand.</p>
                <h5>Haptic Glove Part 3: Coding + Control</h5>
                <p>Using the same technique as what I used for the finger test rig, I mapped potentiometer values to angles of the servo. This allowed me to use a full range of motion to control the fingers precisely.</p>
                <p>My first wired system read the glove readings directly into the Arduino Uno used for the robotic hand. This was easy to do as I was still able to use the built in servo control library. However, I decided to also make a wireless version using the LoRa radio system also featured in my portfolio. I used basic serial communication protocols where I sent packets of information related to each glove fingers position which would be replicated in the hand.</p>
                <p>The biggest issue with this was that the Radiohead library actually had conflicts with the Servo.h library (low level register interference) which wasn't something I could really deal with. This meant that I had to implement my own method of controlling the servo motors! Using my understanding of Pulse Width Modulation from my courses, I was able to control the fingers without the library and still keep the wireless functionality.</p>
                <p>To give the fingers a more realistic feel, I used a proportional controller of a PID. Based on distance between positions, I'd speed up the servos accordingly. Also, I noticed that the fingers were very finicky as the glove readings kept fluctuating on a small level. To comabt this, I used a threshold system where the glove output had to change by a specific amount in order for it to be reflected in the hand. While some precisionw as lost, it felt way more stable.</p>
                <h4>Results</h4>
                <p>Ultimately I ended up with a pretty cool robot hand system that I'm able to control from a distance. I was able to prototype, design, and print many parrts, and program using concepts like serial communication and PWM.</p>
                <p>I'm very ambitious to start on an improved version. Possibilties include more precise control and a more functional arm (wrists and bicep).</p>
                <div className='ProjectImageContainer'>
                    <figure><img src='/images/RAimg9.png' alt='' /><figcaption>Top Assembly View</figcaption> </figure>
                    <figure><img src='/images/RAimg10.png' alt='' /><figcaption>Back Assembly View</figcaption> </figure>
                    <figure><img src='images/robotArm.jpg' alt='' /><figcaption>Entire System</figcaption> </figure>

                </div>
            </div >
        </>
    );
};


export default RA;
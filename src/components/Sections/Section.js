import React from 'react';
import './experiencesSection.css';
import './profileSection.css';
import './sections.css';
import './skills.css';
import './contact.css';
import './projects.css';


import { Link } from "react-router-dom";
import { GoLocation } from 'react-icons/go';
import { BiLink } from 'react-icons/bi'
import { SiLinkedin } from 'react-icons/si';
import { AiOutlinePhone } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai'

import { AiFillFolderOpen } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'

const Section = () => {
    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            {/* PROFILE====================================== */}
            <div className='SectionContainer' id="Profile">
                <h1>Profile</h1>
                <h5>"Engineers like to solve problems. If there are no problems handily available, they will create their own problems." - Scott Adams</h5>
                <hr />

                <div className='profileContainer'>
                    <div className='profileColumn'>
                        <div className='profileLeft'>
                            <h2>About me</h2>
                            <p>Hi there! I'm Ryan and this is my project portfolio. I'm using it to share some of the personal projects I've worked on tying academic teachings and practical experiences together. </p>
                            <p>Most of these projects are done out of a challenge, problem, or boredom; I just like to build things!</p>
                            {/* <div className='lastSec'>
                                <p>I build engineering projects.</p>
                            </div> */}
                        </div>
                    </div>
                    <div className='profileColumn'>
                        <div className='profileMiddle'>
                            {/* picture */}
                            {/*<div className='profilePicture'>  </div>*/}
                            <img src='/images/headshot.png' alt='' />
                        </div>
                    </div>
                    <div className='profileColumn'>
                        <div className='profileRight'>
                            <h2>Details</h2>
                            <h3>Name</h3>
                            <p>Ryan Lee</p>
                            <h3>Area of Study</h3>
                            <p>Mechatronics Engineering</p>
                            <h3>Interests</h3>
                            <p>Robotics, Space, Computation, Automation, and Design</p>
                            <h3>Hobbies</h3>
                            <p>Climbing/Bouldering, Hockey, Football, Music, Astrophotgraphy</p>
                        </div>
                    </div>
                </div>
                <div className='resumeContainer'>
                    <div class="resumeLink">
                        <a href="RyanLee_Resume.pdf" target="_blank">Click here to view my resume</a>
                    </div>
                </div>


                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
            </div>

            {/* PROJECTS======================================== */}
            <div className='SectionContainer' id="Projects">
                <h1>Projects</h1>
                <h5>“I don’t spend my time pontificating about high-concept things; I spend my time solving engineering and manufacturing problems.” - Elon Musk</h5>
                <hr></hr>
                <div className='featuredProjectContainer'>
                    <div className='featuredProject'>
                        <div className='featuredImage'>
                            <img src="images/MKBimg1.png" alt="Featured Project"></img>
                        </div>
                        <div className='featuredDescription'>
                            <h1>Featured Project (Ongoing) </h1>
                            <h2>Motorized Knee Assitive Device (Escalaid)</h2>
                            <p>Knee brace with modifications aimed to assist in rehabilitation of chronic knee injuries like tendinopathy.</p>
                            <p>Consists of motor and tendon-based spool design to effectively support up to 40% of the user's weight in ascending/descending stairs.</p>
                            <p>Utilizes intertial measurement units for gait analysis and state detection, tension sensors for PID control, and magnetic encoders for position feedback.</p>
                            {/* <a href="/RoboticArm+HapticGlove">Learn More</a> */}
                            <Link to="/Escalaid" id='externalLinkIcon'>Learn More</Link>

                        </div>
                    </div>
                </div>

                <div className='projectsContainer'>
                    <div className='box'>
                        <div className='folderIcon'><AiFillFolderOpen size={50} /></div>
                        <Link to="/RoboticArm+HapticGlove" id='externalLinkIcon'><FiExternalLink size={30} color='rgb(16, 175, 159)' /></Link>
                        <h3>Haptic Glove Controlled Arm</h3>
                        <p>A robotic arm prosthetic aimed to mimic hand movements remotely</p>
                        <ul>
                            <li>2024</li>
                            <li>Controls</li>
                            <li>CAD</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <div className='folderIcon'><AiFillFolderOpen size={50} /></div>
                        <Link to="/EQMount" id='externalLinkIcon'><FiExternalLink size={30} color='rgb(16, 175, 159)' /></Link>
                        <h3>Equitorial Mount</h3>
                        <p>Automatic equitorial mount for Astrophotgraphy. Rotates with the stars for better exposures and more centered images for stacking </p>
                        <ul>
                            <li>2024</li>
                            <li>Controls</li>
                            <li>CAD</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <div className='folderIcon'><AiFillFolderOpen size={50} /></div>
                        <Link to="/MarsRover" id='externalLinkIcon'><FiExternalLink size={30} color='rgb(16, 175, 159)' /></Link>
                        <h3>Mars Rover</h3>
                        <p>A Perserverance Rover Replica including radio remote, live camera feed, and in depth controls</p>
                        <ul>
                            <li>2024</li>
                            <li>Controls</li>
                            <li>CAD</li>
                            <li>Circuitry</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <div className='folderIcon'><AiFillFolderOpen size={50} /></div>
                        <Link to="/MacroKeypad" id='externalLinkIcon'><FiExternalLink size={30} color='rgb(16, 175, 159)' /></Link>
                        <h3>Macro Keypad</h3>
                        <p>A macro keypad with several 3x3 keyswitch buttons. Made of 3D printed parts and an Arduino Pro Micro</p>
                        <ul>
                            <li>2021</li>
                            <li>C++</li>
                            <li>CAD</li>
                            <li>Circuitry</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <div className='folderIcon'><AiFillFolderOpen size={50} /></div>
                        <Link to="/PID" id='externalLinkIcon'><FiExternalLink size={30} color='rgb(16, 175, 159)' /></Link>
                        <h3>PID Ball Balancing Platform</h3>
                        <p>A steel ball balancing platform with 2 degrees of freedom using a PID controller</p>
                        <ul>
                            <li>2023</li>
                            <li>C++</li>
                            <li>CAD</li>
                            <li>Circuitry</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <div className='folderIcon'><AiFillFolderOpen size={50} /></div>
                        <Link to="/IronmanHelmet" id='externalLinkIcon'><FiExternalLink size={30} color='rgb(16, 175, 159)' /></Link>
                        <h3>Ironman Helmet </h3>
                        <p>A 3D printed Ironman Helmet with open/close capabilities and LED lights</p>
                        <ul>
                            <li>2023</li>
                            <li>3D Printing</li>
                            <li>C++</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <div className='folderIcon'><AiFillFolderOpen size={50} /></div>
                        <Link to="/StrainGaugeSteeringColumn" id='externalLinkIcon'><FiExternalLink size={30} color='rgb(16, 175, 159)' /></Link>
                        <h3>Strain Gauge Steering Column</h3>
                        <p>A strain gauge system used to measure axial forces on our Baja Racing steering column</p>
                        <ul>
                            <li>2023</li>
                            <li>Circuitry</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <div className='folderIcon'><AiFillFolderOpen size={50} /></div>
                        <Link to="/WordLimitButton" id='externalLinkIcon'><FiExternalLink size={30} color='rgb(16, 175, 159)' /></Link>
                        <h3>Word Limit Button</h3>
                        <p>A Staples 'That was easy' button replica that emits an irritating high pitched noise when someone won't stop talking! </p>
                        <ul>
                            <li>2023</li>
                            <li>CAD</li>
                            <li>3D Printing</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <div className='folderIcon'><AiFillFolderOpen size={50} /></div>
                        <Link to="/UselessMachine" id='externalLinkIcon'><FiExternalLink size={30} color='rgb(16, 175, 159)' /></Link>
                        <h3>Useless Machine</h3>
                        <p>A box that switches itself off once turned on..</p>
                        <ul>
                            <li>2023</li>
                            <li>C++</li>
                            <li>CAD</li>
                            <li>Circuitry</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <div className='folderIcon'><AiFillFolderOpen size={50} /></div>
                        <Link to="/SequentialLogicDigitalDesignProject" id='externalLinkIcon'><FiExternalLink size={30} color='rgb(16, 175, 159)' /></Link>
                        <h3>Sequential Logic Digital Design Project</h3>
                        <p>A digital circuit using numerous logic gates to continiously output a number on a 7 segment display </p>
                        <ul>
                            <li>2021</li>
                            <li>Circuitry</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <div className='folderIcon'><AiFillFolderOpen size={50} /></div>
                        <Link to="/RPiControlledLEDStrip" id='externalLinkIcon'><FiExternalLink size={30} color='rgb(16, 175, 159)' /></Link>
                        <h3>RPi Controlled LED Strip</h3>
                        <p> Base LED controlled system that would allow me to proceed with other projects. Comprised of a Raspberry Pi 4, LED light strips, and MOSFETs</p>
                        <ul>
                            <li>2022</li>
                            <li>Python</li>
                            <li>Circuitry</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <div className='folderIcon'><AiFillFolderOpen size={50} /></div>
                        <Link to="/LoRaRadioMultiPurposeDevice" id='externalLinkIcon'><FiExternalLink size={30} color='rgb(16, 175, 159)' /></Link>
                        <h3>LoRa Radio Multi Purpose Device</h3>
                        <p>Fully functional radio setup using Arduino Uno, Nano, and LoRa that allows me to proceed with other "wireless" connection projects</p>
                        <ul>
                            <li>2021</li>
                            <li>C++</li>
                            <li>Circuitry</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <div className='folderIcon'><AiFillFolderOpen size={50} /></div>
                        <Link to="/ShockOrStudyBracelet" id='externalLinkIcon'><FiExternalLink size={30} color='rgb(16, 175, 159)' /></Link>
                        <h3>Shock or Study Bracelet</h3>
                        <p>Engineering 4 the Future 'hackathon' entry featuring shock watch to promote better study habits. Placed 1st overall.</p>
                        <ul>
                            <li>2022</li>
                            <li>CAD</li>
                            <li>C++</li>
                            <li>C</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <div className='folderIcon'><AiFillFolderOpen size={50} /></div>
                        <Link to="/StepperMotorController" id='externalLinkIcon'><FiExternalLink size={30} color='rgb(16, 175, 159)' /></Link>
                        <h3>Stepper Motor Controller</h3>
                        <p>Controlled a stepper motor with ability to change step size, direction, and speed. Includes STM32 UI and user controls.</p>
                        <ul>
                            <li>2022</li>
                            <li>C++</li>
                            <li>Circuitry</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <div className='folderIcon'><AiFillFolderOpen size={50} /></div>
                        <Link to="/PWMThermalSensorFanController" id='externalLinkIcon'><FiExternalLink size={30} color='rgb(16, 175, 159)' /></Link>
                        <h3>PWM Thermal Sensor Fan Controller </h3>
                        <p>A pulse-width modulation fan that operates based on temperature of a digital thermometer. Includes STM32 UI and user controls.</p>
                        <ul>
                            <li>2022</li>
                            <li>C++</li>
                            <li>Circuitry</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <div className='folderIcon'><AiFillFolderOpen size={50} /></div>
                        <Link to="/SolarExplorerProgram" id='externalLinkIcon'><FiExternalLink size={30} color='rgb(16, 175, 159)' /></Link>
                        <h3>Solar Explorer Program Game</h3>
                        <p>A fun, yet educational space themed game that allows users to  grasp the scale of our Solar System with "1 pixel = size of the moon"</p>
                        <ul>
                            <li>2020</li>
                            <li>Java</li>
                        </ul>
                    </div>


                </div>
                {/* <div className='Note'>
                    But thats not all.. these were just some of the main projects I'd like to highlight.
                    <a href ='https://github.com/leer78'> I have many more projects that I've completed here at my GitHub!</a>
                </div> */}
            </div>

            {/* EXPERIENCES================================ */}
            <div className='SectionContainer' id="Experiences">
                <h1>Experiences</h1>
                <h5>"I believe every human has a finite number of heartbeats. I don't intend to waste any of mine" - Neil Armstrong</h5>
                <div className='row'>
                    <hr />
                    <h2 id="experienceTitle">Education</h2>

                    <div id='individualExperiences'>
                        <div className='column'>
                            <div className='left-column'>
                                <h2 id="school">McMaster University</h2>
                                <h3 >09/2020 - 05/2025 </h3>
                                <figure><img src='/images/McMasterLogo.png' alt='' /></figure>
                            </div>
                        </div>

                        <div className='column'>
                            <div className='right-column'>
                                <h2 id="degree">Bachelor of Mechatronics Engineering B.Eng (Co-op) ||cGPA 3.71/4.0</h2>
                                <p>Studying in the undergraduate Engineering co-op program to develop a further understanding on high level relevant courses in the modern tech industry.</p>
                                <p>What is <b>mechatronics engineering</b>? I like to think that it breaks the boundaries between <b>mechanical, electrical, and software</b> engineering. </p>
                                <div className="experienceList" >
                                    <p>Notable courses include:</p>
                                    <ul>
                                        <li>ENGINEER 1P13  || Integrated Design Projects in Engineering</li>
                                        <li>MATH 1ZA3, 1ZB3, 1ZC3, 2Z03, 2ZZ3 || Engineering Mathematics I-IV </li>
                                        <li>MECHTRON 2MP3 || Programming for Mechatronics</li>
                                        <li>MECHENG 2QA4 || Mechanics: Kinetics and Dynamics</li>
                                        <li>ENGPHYS 2E04 || Analog and Digital Circuits</li>
                                        <li>ENGPHYS 2A04 || Electricity and Magnetism </li>
                                        <li>MECHTRON 2MD3 || Data Structures and Algorithms</li>
                                        <li>MECHTRON 2TA4 || Embedded Systems Design </li>
                                        <li>ENGPHYS 2NE3 || Thermal Systems Design </li>
                                        <li>MECHTRON 3K04 || Software Development </li>
                                        <li>MECHTRON 3MX3 || Signals and Systems </li>
                                        <li>MECHTRON 3DX4 || Dynamic Models and Control Physical Systems </li>
                                        <li>MECHTRON 3TB4 || Embedded Systems Design II </li>
                                        <li>SFWRENG 3SH3 || Operating Systems </li>
                                        <li>MECHTRON 4AA4 || Real-Time Systems and Control Applications </li>

                                    </ul>
                                </div>

                                <div className='greenTag'>
                                    <a href='https://academiccalendars.romcmaster.ca/preview_program.php?catoid=44&poid=22947' target='_blank' id='location'><GoLocation /> Hamilton, Ontario &nbsp;&nbsp; || &nbsp;&nbsp;<BiLink size={20} /> Mechatronics Engineering, Mechatronics Engineering Co-op (B.Eng.) </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='row'>
                    <hr />
                    <h2 id="experienceTitle">Work Experience</h2>
                    <div id='individualExperiences'>

                        <div className='column'>
                            <div className='left-column'>
                                <h2 id="school">Advanced Micro Devices (AMD)</h2>
                                <h3 >04/2023 - 06/2024 </h3>
                                <figure><img src='/images/amdlogo.png' alt='' /></figure>
                            </div>
                        </div>

                        <div className='column'>
                            <div className='right-column'>
                                <h2 id="degree">Graphics Memory Hub Verification Engineering Intern</h2>
                                <p>Managed various aspects of the pre-silicon regression testing process. Worked with 7+ teams to set up and run regressions while triaging test results to identify failed signatures.</p>
                                <div className='experienceList'>
                                    <p>Accomplished duties include:</p>
                                    <ul>
                                        <li>Managed 70+ regressions for 7+ IP teams for memory hub team through triaging test results and optimizing cases</li>
                                        <li>Improved efficiency of regression verification process through data displays, code coverage reports, and run logs</li>
                                        <li>Programmed scripts related to test logs, visual displays, and general regression flows using Ruby, Perl, and C++</li>
                                        <li>Investigated test outputs by means of timing diagram verification, Verilog code analysis, and scripting triage programs</li>
                                        <li>Continously learning and exploring the various steps associated in the chip design process</li>
                                    </ul>
                                </div>
                                <div className='greenTag'>
                                    <a href='https://www.amd.com/en.html' target='_blank' id='location'><GoLocation /> Markham, Ontario &nbsp;&nbsp; || &nbsp;&nbsp;<BiLink size={20} /> amd.com </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id='individualExperiences'>

                        <div className='column'>
                            <div className='left-column'>
                                <h2 id="school">Independant Electricity System Operator (IESO)</h2>
                                <h3 >04/2022 - 09/2022 </h3>
                                <figure><img src='/images/iesologo.png' alt='' /></figure>
                            </div>
                        </div>

                        <div className='column'>
                            <div className='right-column'>
                                <h2 id="degree">Information and Technology Services Student</h2>
                                <p>Worked with the Corperate Technology Sysems department to accomplish a broad range of technical tasks. I had many opporunities to grow my communication, collaboration, and initiative skills.</p>
                                <div className='experienceList'>
                                    <p>Accomplished duties include:</p>
                                    <ul>
                                        <li>Aligned database of 500+ servers through scripts and high precision checks, noted trends and found optimizations</li>
                                        <li>Managed 450 Microsoft and Linux servers through installations, patches, health checks, and investigations</li>
                                        <li>Automated tasks through Bash and PowerShell scripting with a focus on frequent updates, task schedulers, and audit reports </li>
                                        <li>Researched enterprise software through vendor outreach leading to company wide advanced endpoint protection purchase</li>
                                        <li>Learned about Ontario's energy market in its entirety</li>
                                    </ul>
                                </div>
                                <div className='greenTag'>
                                    <a href='https://www.ieso.ca/' target='_blank' id='location'><GoLocation /> Mississauga, Ontario &nbsp;&nbsp; || &nbsp;&nbsp;<BiLink size={20} /> ieso.ca </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id='individualExperiences'>
                        <div className='column'>
                            <div className='left-column'>
                                <h2 id="school">Canadian Imperial Bank <br></br>of Commerce (CIBC)</h2>
                                <h3 >04/2021 - 9/2021 </h3>
                                <figure><img src='/images/cibclogo.png' alt='' /></figure>
                            </div>
                        </div>

                        <div className='column'>
                            <div className='right-column'>
                                <h2 id="degree">Technical Systems Analyst</h2>
                                <p>Worked under the NSO team to assist in automating daily proccesses while managing global servers and devices. Gained experience in the professional work environment.</p>
                                <div className="experienceList" >
                                    <p>Accomplished duties include:</p>
                                    <ul>
                                        <li>Investigated and worked alongside the CIBC Infrastructure Operations team to tackle a variety of technical problems</li>
                                        <li>Aided team in transition to Microsoft Azure resources with a focus on presenting vendor change releases and firewall integration</li>
                                        <li>Worked to utilise Ansible and Git to deploy network related applications, saving company resources </li>
                                        <li>Implement autonomous processes to reduce the manual efforts and redundant tasks associated with technology infrastructure</li>
                                        <li>Upheld security protocols in my actions whilst ensuring that all my actions and undertakings were held to a high standard </li>
                                        <li>Lead daily stand-up meetings to document and organize key agenda items. Reduced agenda discussion times by 50%</li>
                                        <li>Devised an incident ticket tracker to record overnight pages and investigate key findings for reducing queue volume 3-fold</li>
                                    </ul>
                                </div>

                                <div className='greenTag'>
                                    <a href='https://www.cibc.com/en/personal-banking.html' target='_blank' id='location'><GoLocation /> Toronto, Ontario &nbsp;&nbsp; || &nbsp;&nbsp;<BiLink size={20} /> cibc.com </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <hr />
                    <h2 id="experienceTitle">Extracurricular Activities</h2>
                    <div id='individualExperiences'>
                        <div className='column'>
                            <div className='left-column'>
                                <h2 id="school">McMaster Baja Racing</h2>
                                <h3 >09/2023 - Present </h3>
                                <figure><img src='/images/bajalogo.png' alt='' /></figure>
                            </div>
                        </div>

                        <div className='column'>
                            <div className='right-column'>
                                <h2 id="degree">Data Acquisition</h2>
                                <p>The McMaster Baja Racing team is a team of students who work to compete in the SAE Baja Series. The team manufactures, designs, and races off road vehicles (think ATVs!) with a focus on mechanical concepts.</p>

                                <div className="experienceList" >
                                    <p>Tasks accomplished were:</p>
                                    <ul>
                                        <li>Manufactured, and assembled off road racing vehicle with a focus on data acquisition, incorporating electronics into design</li>
                                        <li>Acquired steering column torque data through implementation of strain gauges used to optimize user driving capabilities</li>
                                        <li>Programmed a dynamometer used to measure primary/secondary CVT RPM with the aim of fine tuning engine parameters</li>
                                        <li>Machined simple parts from engineering drawing and datasheets using milling machine, lathe, and band saw</li>
                                        <li>Gained experience using common assembly and measurement tools</li>
                                    </ul>
                                </div>

                                <div className='greenTag'>
                                    <a href='https://mcmasterbaja.ca/' target='_blank' id='location'><GoLocation /> Hamilton, Ontario &nbsp;&nbsp; || &nbsp;&nbsp;<BiLink size={20} />mcmasterbaja.ca </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id='individualExperiences'>
                        <div className='column'>
                            <div className='left-column'>
                                <h2 id="school">Mac Rocketry Team</h2>
                                <h3 >09/2020 - 02/2022 </h3>
                                <figure><img src='/images/macrocketrylogo.png' alt='' /></figure>
                            </div>
                        </div>

                        <div className='column'>
                            <div className='right-column'>
                                <h2 id="degree">Ground Controls Software Developer</h2>
                                <p>The McMaster Rocketry Team designs, builds and launches rockets and innovative payloads. This year we are competing in the Launch Canada Competition and building a rocket to launch to 3km (10,000ft) in altitude!</p>

                                <div className="experienceList" >
                                    <p>Tasks accomplished were:</p>
                                    <ul>
                                        <li>Worked with the ground controls to develop a functional team website along with back-end features such as member login(Viewable at http://macrocketry.ca) </li>
                                        <li>Utilized HTML, CSS, React, Flask and chart.js to visualize and present flight censor data</li>
                                        <li>Leveraged LoRa and Arduino devices to develop a versatile transceiver and receiver system to transfer data on a wide scale</li>
                                        <li>Analyzed flight data and trajectories using calculations and algorithms to convert existing data into additional information</li>
                                    </ul>
                                </div>

                                <div className='greenTag'>
                                    <a href='https://www.macrocketry.ca/' target='_blank' id='location'><GoLocation /> Hamilton, Ontario &nbsp;&nbsp; || &nbsp;&nbsp;<BiLink size={20} />macrocketry.ca </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id='individualExperiences'>
                        <div className='column'>
                            <div className='left-column'>
                                <h2 id="school">McMaster Undegraduate Academic Astronomy <br></br>Club (MUAAC) </h2>
                                <h3 >09/2020 - 07/2022 </h3>
                                {/* <figure><img src='/images/McMasterLogo.png' alt=''/></figure> */}
                            </div>
                        </div>

                        <div className='column'>
                            <div className='right-column'>
                                <h2 id="degree">First Year Representative + VP of Finance</h2>
                                <p>A student group dedicated to the study and appreciation of our universe.</p>

                                <div className="experienceList" >
                                    <p>Promoted engagement through:</p>
                                    <ul>
                                        <li>Generated excitement and interest within the first year community as the club’s first year representative</li>
                                        <li>Substantial experience in recordkeeping and accounting tasks as vice president of finance</li>
                                    </ul>
                                </div>

                                <div className='greenTag'>
                                    <a href='https://www.facebook.com/MacAstronomy/' target='_blank' id='location'><GoLocation /> Hamilton, Ontario &nbsp;&nbsp; || &nbsp;&nbsp;<BiLink size={20} /> MUAAC </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SKILLS================================ */}
            <div className='SectionContainer' id="Skills">
                <h1>Skills</h1>
                <h5>"If you really look closely, most overnight successes took a long time."  — Steve Jobs</h5>
                <hr />

                <div className='skillsContainer'>
                    <div className='skillsColumn'>
                        <div className='skillsLeft'>
                            <div className='skillsHeading'>Programming</div>
                            <ul>
                                <li>Scripting
                                    <div className='barContainer'>
                                        <div className='skillScripting'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>HTML
                                    <div className='barContainer'>
                                        <div className='skillHTML'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>CSS
                                    <div className='barContainer'>
                                        <div className='skillCSS'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>React
                                    <div className='barContainer'>
                                        <div className='skillReact'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>C/C++
                                    <div className='barContainer'>
                                        <div className='skillC'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>Python
                                    <div className='barContainer'>
                                        <div className='skillPython'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>MATLAB
                                    <div className='barContainer'>
                                        <div className='skillMatlab'> &nbsp;</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='skillsColumn'>
                        <div className='skillsRight'>
                            <div className='skillsHeading'>Enterprise Management</div>
                            <ul>
                                <li>GitHub
                                    <div className='barContainer'>
                                        <div className='skillGitHub'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>UNIX
                                    <div className='barContainer'>
                                        <div className='skillLinuxBash'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>Powershell
                                    <div className='barContainer'>
                                        <div className='skillPowershell'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>Excel
                                    <div className='barContainer'>
                                        <div className='skillExcel'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>Word
                                    <div className='barContainer'>
                                        <div className='skillWord'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>PowerPoint
                                    <div className='barContainer'>
                                        <div className='skillPowerPoint'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>Azure
                                    <div className='barContainer'>
                                        <div className='skillAzure'> &nbsp;</div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>

                <div className='skillsContainer'>
                    <div className='skillsColumn'>
                        <div className='skillsLeft'>
                            <div className='skillsHeading'>Technical Skills</div>
                            <ul>
                                <li>Circuitry
                                    <div className='barContainer'>
                                        <div className='skillCircuitry'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>Soldering
                                    <div className='barContainer'>
                                        <div className='skillSoldering'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>CAD
                                    <div className='barContainer'>
                                        <div className='skillCAD'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>3D Printing/Modelling
                                    <div className='barContainer'>
                                        <div className='skill3DPrinting'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>Logic Gates Design
                                    <div className='barContainer'>
                                        <div className='skillLogicGateDesign'> &nbsp;</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='skillsColumn'>
                        <div className='skillsRight'>
                            <div className='skillsHeading'>Soft Skills</div>
                            <ul>
                                <li>Communication
                                    <div className='barContainer'>
                                        <div className='skillCommunication'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>Teamwork
                                    <div className='barContainer'>
                                        <div className='skillTeamwork'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>Problem Solving
                                    <div className='barContainer'>
                                        <div className='skillProblemSolving'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>Time Management
                                    <div className='barContainer'>
                                        <div className='skillTimeManagement'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>Initiative
                                    <div className='barContainer'>
                                        <div className='skillInitiative'> &nbsp;</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>






                </div>


                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
            </div>


            {/* CONTACT======================================== */}
            <div className='SectionContainer' id="Contact">
                <h1>Contact</h1>
                <hr></hr>

                <div className='contactContainer'>

                    <div className='contactColumn'>
                        <div className='contactLeft'>
                            <ul>
                                <li><SiLinkedin />&nbsp;&nbsp; linkedin.com/leer78 </li>
                                <li><AiOutlinePhone /> &nbsp;&nbsp; 647 466 7142 </li>
                            </ul>
                        </div>
                    </div>
                    <div className='contactColumn'>
                        <div className=' contactRight'>
                            <ul>
                                <li><MdEmail /> &nbsp; &nbsp;rlee20744@gmail.com </li>
                                <li><AiFillGithub />&nbsp;&nbsp; github.com/leer78</li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};


export default Section;

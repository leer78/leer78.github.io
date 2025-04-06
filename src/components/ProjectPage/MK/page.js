import React from 'react';
import '../page.css';

import { Link } from "react-router-dom";

import { FiArrowRight } from 'react-icons/fi';
import { FiArrowLeft } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const MK = () =>{
    return(
        <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <div className="banner">  
            <h1>Ryan Lee - Project Portfolio</h1>
            <div className = "buttons">
                <Link to="/MarsRover" id = 'button'><FiArrowLeft size = {20} color = 'black'/></Link>
                <Link to="/" id = 'button'><AiOutlineHome size = {20} color = 'black'/></Link>
                <Link to="/PID" id = 'button'><FiArrowRight size = {20} color = 'black'/></Link>
            </div>
        </div>
        <div className="ProjectContainer">
            <h1>Macro Keypad</h1>
            <h2>Multidisciplinary Personal Project <a href = "https://github.com/leer78/Macro-Keypad" target="_blank" id = 'externalLinkIconGithub'><AiFillGithub size = {25} color = 'rgb(16, 175, 159)'/></a></h2>
           
            <h3>2021</h3>

            <div className ="skillsTab">
                <div className ="skillItem">C++</div>
                <div className ="skillItem">CAD</div>
                <div className ="skillItem">Circuitry</div>

            </div>

            <h4>Overview</h4>
            <p>A macro keypad with several 3x3 keyswitch buttons that utilize an Arduino Pro Micro to extend the functionality of my main keyboard. My primary focus was to add convenient shortcuts for tools that I regularly use.</p>
            
            <h4>Problem</h4>
            <p>Whenever I flipped my laptop into tablet mode, accessing quick shortcuts using a keyboard was no longer simple. Along with the need to use these shortcuts repetitvely for school such as copying between documents, I decided to create this project to ease repetitve manual tasks.</p>
            <div className='ProjectImageContainer'>
                <figure><img src='/images/MKimg1.jpg' alt=''/><figcaption>Solder Work + Keyswitches</figcaption> </figure>
                <figure><img src='/images/MKimg2.png' alt=''/><figcaption>Pro Micro Wiring</figcaption> </figure>
                <figure><img src='/images/MKimg3.png' alt=''/><figcaption>Frame Design</figcaption> </figure>
            </div>
            <h4>Implementation</h4>
            <p>I intially started by 3D printing several main components of this project. Reusing 3D printed keycaps from a .stl file on the web (source unknown), I started to develop a framework for the main body.</p>
            <p>I took this opportunity to solder a device for the first time rather than buying a more expensive PCB board. In the image below, I first created three rows of diodes which were connected to one of the two pins. For efficiency, I connected the diode wires to eachother directly rather than connecting them by wire. I felt that this was fine as there would be very few loose wires anyways, so I didn't worry about shorts.</p>
            <p>I had to calculate simple circuitry values such as what voltage my LEDs would use and the strength of their resistors. This was done using Ohm's Law and was straight forward as each LED would be seperate in their own series loops. Once the light emitting diodes and resistors were soldered together, I connected them to my Arduino as follows.</p>
            <p>In terms of code, I simply used the keyboard.h library package, and sorted different sets (1-9) in an array. The package allowed us to effectively read the matrix of keyswitch inputs. </p>
            <p>The entire project took about a weeks worth of time. Day 1 - 3: Designing, modelling, and 3D printing the key caps and switches. Day 3-4: Soldering the circuit matrix. Day 4-5: Researching and adding LED functionality. Day 6: Programming the shortcuts. Day 7: Testing different cases and bottem panels.</p>
            <div className='ProjectImageContainer'>
                <figure><img src='/images/MKimg4.jpg' alt=''/><figcaption>Final Product</figcaption> </figure>
                <figure><img src='/images/MKimg5.png' alt=''/><figcaption>Final Product 2</figcaption> </figure>
            </div>
            <h4>Results</h4>
            <p>I was able to produce a functional macro keypad using several disciplines of engineering. I used CAD to develop the main structure and physical components, programmed an arduino using C++, and interconnected the embedded system with the key switches using circuitry. I now have a neat device with 9 different pages with customizable shortcuts to aid in my daily life.</p>

        </div>
        </>
    );
};


export default MK;
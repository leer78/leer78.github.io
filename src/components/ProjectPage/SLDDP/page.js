import React from 'react';
import '../page.css';

import { Link } from "react-router-dom";

import { FiArrowRight } from 'react-icons/fi';
import { FiArrowLeft } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const SLDDP = () =>{
    return(
        <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <div className="banner">  
            <h1>Ryan Lee - Project Portfolio</h1>
            <div className = "buttons">
                <Link to="/UselessMachine" id = 'button'><FiArrowLeft size = {20} color = 'black'/></Link>
                <Link to="/" id = 'button'><AiOutlineHome size = {20} color = 'black'/></Link>
                <Link to="/RPiControlledLEDStrip" id = 'button'><FiArrowRight size = {20} color = 'black'/></Link>
            </div>
        </div>
        <div className="ProjectContainer">
            <h1>Sequential Logic Digital Design Project</h1>
            <h2>2E04: Digital Circuits </h2>
           
            <h3>2021</h3>

            <div className ="skillsTab">
                <div className ="skillItem">Circuitry</div>
            </div>

            <h4>Overview</h4>
            <p>A digital circuit designed using finite state machines and logic gates to repetitvely output my student number. A full video can be found <a href ='https://www.youtube.com/watch?v=lDECUQmE-Zg&feature=youtu.be'>here.</a></p>
            
            
            <div className="YouTubeContainer">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/s_0UFBn1iLw?si=3Jc7vqF-ymE8MeWt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            
            <h4>Problem</h4>
            <p>Use analytical logic and truth tables to develop Sum of Product/Product of Sum expressions for numbers, implement these using logic gates such as AND, OR, etc. and model this using Multisim as well as a physical build. </p>
            <div className='ProjectImageContainer'>
                <figure><img src='/images/SLDDPimg3.png' alt=''/><figcaption>Final Multisim Circuit</figcaption> </figure>
                <figure><img src='/images/SLDDPimg5.png' alt=''/><figcaption>Final Physical Circuit</figcaption> </figure>
            </div>
            <h4>Implementation</h4>
            <p> To display my student number I first started by converting each value to binary as such: 4 = 100 – 0/x 0 = 000 - 0 0 = 000 - 1 3 = 011 - 0 1 = 001 – 0/x 2 = 010 - 0 2 = 010 - 1 = 011 - 1 5 = 101 – 0/x</p>
            <p>Using an excitation table and truth table, I then colour coded everything and made KMaps of each pin output. These expression outputs were then optimized based on recurring patterns and choosing between SOP/POS implementation.</p>
            <p>Using Multisim and knowledge of logic gates, I built the circuit using flipflops and decoder chips. To test, I then ran this through a timing diagram to ensure that the FSM followed the correct logic and loops properly.</p>
            <p>For the final physical build, I laid out the core pieces such as gates and LED. I then wired the clock for rising edges to each flipflop, and did the general wiring very carefully. I encountered a problem where my 7 segment display wasn't working, so I did a few tests on my own to ensure it was actually broken and not my negligence. I also faced other problems where the output wasn't what I expected. To solve this, I repetitvely followed wires in accordance to my simulation. However, I wasn't able to bug fix. Therefore, I had to redo the wires.</p>
            <div className='ProjectImageContainer'>
                <figure><img src='/images/SLDDPimg1.png' alt=''/><figcaption>Truth Table</figcaption> </figure>
                <figure><img src='/images/SLDDPimg2.png' alt=''/><figcaption>SOP and POS Expression Eg.</figcaption> </figure>
                <figure><img src='/images/SLDDPimg4.png' alt=''/><figcaption>Timing Diagram</figcaption> </figure>


            </div>
            <h4>Results</h4>
            <p>I was able to create an infinitely looping digital circuit using the built up principles of my Analog and Digital Circuits course. I furthered my understanding of gate theory and physically applied these concepts.</p>
        </div>
        </>
    );
};


export default SLDDP;
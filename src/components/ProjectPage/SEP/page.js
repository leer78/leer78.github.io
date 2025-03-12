import React from 'react';
import '../page.css';

import { Link } from "react-router-dom";

import { FiArrowRight } from 'react-icons/fi';
import { FiArrowLeft } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const SEP = () =>{
    return(
        <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <div className="banner">  
            <h1>Ryan Lee - Project Portfolio</h1>
            <div className = "buttons">
                <Link to="/PWMThermalSensorFanController" id = 'button'><FiArrowLeft size = {20} color = 'black'/></Link>
                <Link to="/" id = 'button'><AiOutlineHome size = {20} color = 'black'/></Link>
                <Link to="/Escalaid" id = 'button'><FiArrowRight size = {20} color = 'black'/></Link>
            </div>
        </div>
        <div className="ProjectContainer">
            <h1>Solar Explorer Program</h1>
            <h2>Software Personal Project  <a href = "https://github.com/leer78/Solar-Explorer-Program" target="_blank" id = 'externalLinkIconGithub'><AiFillGithub size = {25} color = 'rgb(16, 175, 159)'/></a></h2>
           
            <h3>2020</h3>

            <div className ="skillsTab">
                <div className ="skillItem">Java</div>
            </div>

            <h4>Overview</h4>
            <p>This project was inspired by the online website Pixelspace Solar system by Joshworth. I took my own spin on this project by adding an educational/entertainment aspect to this idea, where you (the spaceship), can visit the major bodies of our Solar System while experiencing the vast size of it.</p>
            <h4>Problem</h4>
            <p>Implement an idea based on the representation of equation 1 pixel to the diameter of a moon in unique way, while utilizing Java</p>
            <div className='ProjectImageContainer'>
                <figure><img src='/images/SEPimg2.png' alt=''/><figcaption>Homescreen</figcaption> </figure>
                <figure><img src='/images/SEPimg1.png' alt=''/><figcaption>Instructions</figcaption> </figure>
            </div>
            <h4>Implementation</h4>
            <p>This was implemented when I first learned to program. After being taught Java in grade 12, I was interested in combining my personal interests of space and programming, and came up with this. I utilized key coding features like Object Oriented Programming and file IO to effectively organize components such as planets.</p>
            <p>To properly implement the whole "1 pixel = 3,474.8km" feature, I had to do some simple math and document these distances in a text file. I also scaled everything except the spaceship in accordance to this.</p>
            <div className='ProjectImageContainer'>
                <figure><img src='/images/SEPimg3.png' alt=''/><figcaption>Instructions Pt. 2</figcaption> </figure>
                <figure><img src='/images/SEPimg4.png' alt=''/><figcaption>In Game View</figcaption> </figure>

            </div>
            <h4>Results</h4>
            <p>I was able to create a fun, yet educational space themed game that allows users to truely grasp the scale of our solar system. This was done efficiently using OOP and helped me get my foot into the door of the programming world.</p>
        </div>
        </>
    );
};


export default SEP;
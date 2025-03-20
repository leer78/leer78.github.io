import React from 'react';
import '../page.css';

import { Link } from "react-router-dom";

import { FiArrowRight } from 'react-icons/fi';
import { FiArrowLeft } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const IM = () => {
    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <div className="banner">
                <h1>Ryan Lee - Project Portfolio</h1>
                <div className="buttons">
                    <Link to="/PID" id='button'><FiArrowLeft size={20} color='black' /></Link>
                    <Link to="/" id='button'><AiOutlineHome size={20} color='black' /></Link>
                    <Link to="/StrainGaugeSteeringColumn" id='button'><FiArrowRight size={20} color='black' /></Link>
                </div>
            </div>
            <div className="ProjectContainer">
                <h1>Ironman Helmet</h1>
                <h2>Multidisciplinary Personal Project</h2>

                <h3>2023</h3>

                <div className="skillsTab">
                    <div className="skillItem">3D Printing</div>
                    <div className="skillItem">C++</div>
                </div>

                <h4>Overview</h4>
                <p>Manufactured Ironman Helmet based on online tutorials to garner experience in 3D printing, the finishing process, and circuitry.</p>
                <h4>Problem</h4>
                <p>Put together an Ironman Helmet for personal interests!</p>
                <h4>Implementation</h4>
                <h5>Step 1: Printing</h5>
                <p>Started off by printing some 3D Models that I purchased here:</p>
                <p><a href="https://www.cgtrader.com/3d-print-models/art/other/avengers-iron-man-mark85-mk85-helmet" target='_blank'>Ironman Mk85 Helmet</a></p>
                <p>I started off by experimenting with various 3D printing parameters on Cura Slicer. Settings which I tuned were print speed, support and model infil, and print orientation.</p>
                <p>A print speed of 60-70 mm/s yielded consistent results. When picking the speeds, I considered factors such as part detail.</p>
                <p>Support and model infils of 2-3% were used along with the gyroid infil geometry. These were very low yet yielded a strong set of parts while keeping print time down.</p>
                <p>Print orientation can be crucial for good quality prints. For instance, the helmet is a large bowl shape. I had to consider that if I printed it right-side up, the entire inside would have supports leading to huge resource usage, but the top would have a cleaner finish. I decided to orient the print upside down to limit support generation, but the print quality wasn't the best.</p>
                <div className='ProjectImageContainer'>
                    <figure><img src='/images/IMimg1.jpg' alt='' /><figcaption>Helmet Print</figcaption> </figure>
                    <figure><img src='/images/IMimg2.jpg' alt='' /><figcaption>Jaw Piece Print</figcaption> </figure>
                </div>
                <h5>Step 2: Finishing</h5>
                <p>Next was the spraypaint process. To have a proper finish, the pieces had to be sanded, primed, then painted.</p>
                <p>Sanding is arguably the most important step. What you put in during this stage is what you get as the product. I started with 60 grit sand paper to diminish print lines, then up to 200 and then 300 for a very smooth finish. Using a palm sander would've saved a lot of manual effort but I didn't have one.</p>
                <p>I used a coat of filler primer which fills small cracks with material to create a smoother surface. This can be sanded once again while leaving a nice white surface which allows spray paint to adhere better to the material.</p>
                <p>Wood filler was used alongside the filler primer to fill out small impurities leftover from the printing process.</p>
                <p>Spray painting was the fun part! I played around with colour combinations at Home Depot and applied them.</p>
                <div className='ProjectImageContainer'>
                    <figure><img src='/images/IMimg7.jpg' alt='' /><figcaption>Jaw Piece Priming</figcaption> </figure>
                    <figure><img src='/images/IMimg3.jpg' alt='' /><figcaption>Helmet Peak Priming</figcaption> </figure>
                    <figure><img src='/images/IMimg8.jpg' alt='' /><figcaption>Spray Painting</figcaption> </figure>
                </div>
                <h5>Step 3: Electronics + Putting it all together</h5>
                <p>The hardest part of the process was aligning the servo motors in the helmet peak so that they would lift up the mask at the same time. This took many attempts!</p>
                <p>The servos were also PLA welded into place which was a useful skill for me to practice, as the welds can be used for a variety of things including 'glueing' parts together, repairs, and strengthening sections. This was done using an electric soldering iron and slowly feeding material into the tip.</p>
                <p>Using an Arduino Nano, I used a finite state machine method of controling the servo motors so that the LED eyes and motors would open and close in stages with a button in the earpiece to tie it all together.</p>
                <p>A quality of life addition was welding small neodymium magnets oriented so that the jaw could easily slide on whilst being easy to remove.</p>
                <div className='ProjectImageContainer'>
                    <figure><img src='/images/IMimg4.jpg' alt='' /><figcaption>Mask to Helmet Aligners</figcaption> </figure>
                    <figure><img src='/images/IMimg9.jpg' alt='' /><figcaption>Magnets</figcaption> </figure>
                </div>

                <h4>Results</h4>
                <p>This project was ultimately done to satisfy my younger selfs dream of having a functional Ironman helmet! Though I didn't design much myself, I had a fun time putting everything together and overcoming manufacturing challenges.</p>
                <div className='ProjectImageContainerLarge'>
                    <figure><img src='/images/IMimg5.jpg' alt='' /><figcaption>Closed Helmet</figcaption> </figure>
                    <figure><img src='/images/IMimg6.jpg' alt='' /><figcaption>Open Helmet</figcaption> </figure>
                </div>
            </div>
        </>
    );
};

export default IM;
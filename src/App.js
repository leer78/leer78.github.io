import React, { Component, Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Sections/Section";
import LandingPage from "./components/LandingPage/landingpage";
import ParticleBackground from "./components/particleBackground";
import MK from "./components/ProjectPage/MK/page";
import RCLP from "./components/ProjectPage/RCLP/page";
import LRMPD from "./components/ProjectPage/LRMPD/page";
import SSB from "./components/ProjectPage/SSB/page";
import SEP from "./components/ProjectPage/SEP/page";
import SLDDP from "./components/ProjectPage/SLDDP/page";
import SMC from "./components/ProjectPage/SMC/page";
import PTSFC from "./components/ProjectPage/PTSFC/page";
import IM from "./components/ProjectPage/IM/page";
import WL from "./components/ProjectPage/WL/page";
import SGSC from "./components/ProjectPage/SGSC/page";
import RA from "./components/ProjectPage/RA/page";
import UB from "./components/ProjectPage/UB/page";
import PID from "./components/ProjectPage/PID/page";
import MR from "./components/ProjectPage/MR/page";
import EQ from "./components/ProjectPage/EQ/page";



import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import {  Fragment } from 'react';

class App extends Component {
  render() {
     
    return (
      <Router>
          <div className="App">
                  {/* <LandingPage/> */}
               
                  <Routes>
                    <Route path="/" element ={
                      <Fragment>
                        
                          <Navbar />
                          <ParticleBackground/>
                          <LandingPage/>
                          <Section/>
                      </Fragment>
                    }/>
                    <Route path="/EQMount" element= {
                           <Fragment>
                              <ScrollToTop/>
                              <EQ />
                           </Fragment>
                      }> </Route>
                    <Route path="/MarsRover" element= {
                           <Fragment>
                              <ScrollToTop/>
                              <MR />
                           </Fragment>
                      }> </Route>
                 
                      <Route path="/MacroKeypad" element= {
                           <Fragment>
                              <ScrollToTop/>
                              <MK />
                           </Fragment>
                      }> </Route>
                      <Route path="/RPiControlledLEDStrip" element= {
                           <Fragment>
                              <ScrollToTop/>
                              <RCLP />
                           </Fragment>
                      }> </Route>
                      <Route path="/LoRaRadioMultiPurposeDevice" element= {
                           <Fragment>
                              <ScrollToTop/>
                              <LRMPD />
                           </Fragment>
                      }> </Route>
                      <Route path="/ShockOrStudyBracelet" element= {
                           <Fragment>
                              <ScrollToTop/>
                              <SSB />
                           </Fragment>
                      }> </Route>
                      <Route path="/SequentialLogicDigitalDesignProject" element= {
                           <Fragment>
                              <ScrollToTop/>
                              <SLDDP />
                           </Fragment>
                      }> </Route>
                      <Route path="/StepperMotorController" element= {
                           <Fragment>
                              <ScrollToTop/>
                              <SMC />
                           </Fragment>
                      }> </Route>
                      <Route path="/PWMThermalSensorFanController" element= {
                           <Fragment>
                              <ScrollToTop/>
                              <PTSFC />
                           </Fragment>
                      }> </Route>
                      <Route path="/SolarExplorerProgram" element= {
                           <Fragment>
                              <ScrollToTop/>
                              <SEP />
                           </Fragment>
                      }> </Route>
                      <Route path="/IronmanHelmet" element= {
                           <Fragment>
                              <ScrollToTop/>
                              <IM />
                           </Fragment>
                      }> </Route>
                      <Route path="/WordLimitButton" element= {
                           <Fragment>
                              <ScrollToTop/>
                              <WL />
                           </Fragment>
                      }> </Route>
                      <Route path="/StrainGaugeSteeringColumn" element= {
                           <Fragment>
                              <ScrollToTop/>
                              <SGSC />
                           </Fragment>
                      }> </Route>
                      <Route path="/RoboticArm+HapticGlove" element= {
                           <Fragment>
                              <ScrollToTop/>
                              <RA />
                           </Fragment>
                      }> </Route>
                      <Route path="/UselessMachine" element= {
                           <Fragment>
                              <ScrollToTop/>
                              <UB />
                           </Fragment>
                      }> </Route>
                    <Route path="/PID" element= {
                           <Fragment>
                              <ScrollToTop/>
                              <PID />
                           </Fragment>
                      }> </Route>
        
                  </Routes>
              

           </div>
      </Router>
     
    );
  }
  
}
export default App;

import React, { useState } from "react";
import "../Home/Home.css";
import Photo1 from "../../assets/gangate.jpg";
import Examples from "../Name/examples";
import Career from "../Career/Career";
import Skills from "../Skill/Skill";
import Resume from "../../Resume/Resume";
import About from "../About/About";
import Works from "../Works/Works";
import ContactFrom from "../Contact From/ContactFrom";

function Home() {
  return (
    <>
      <div className="home">
        <div className="intro">
          <About />
        </div>
        <div className="component-carr-skill">
          <div className="career">
            <Career />
          </div>
          <div className="skills">
            <Skills />
          </div>
        </div>
        <div>
          <div>
            <Works />
          </div>
          <div>
            <ContactFrom />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

import React, { useState } from "react";
import Frogani from "./Frogani.js";
import Frogani2 from "./Frogani2.js";
import Nav from "./nav.js";
import Workui from "./Workui.js";
import Userpage from "./Userpage.js";
import Resume from "./resume.js";
import Drawing from "./Drawing.js";
import Tabui from "./Tabui.js";
import ParallaxApp from "./concept.js";
import Contact from "./Contact.js";
import { Link, animateScroll as scroll } from "react-scroll";
import Frogleaf from "./images/frogleaf.svg";
import { useParams } from "react-router";

// const HambugerToggleClickHandler = () =>{
//   this.setState((prevState)=>{
//     return {sideOpen:!prevState.sideOpen}
//   });
// };

function Mainvisual() {
  const { page } = useParams();
  return (
    <div className="mainvisual">
      <Nav />
      <div className="main_div" id="section1">
        <div className="main_title">
          <span>P</span>
          <span>O</span>
          <span>L</span>
          <span>T</span>
          <div>
            <span>F</span>
            <span>O</span>
            <span>L</span>
            <span>I</span>
            <span>O</span>
          </div>
        </div>
        <img className="frogleaf" src={Frogleaf}></img>
        <div className="portfolio_quick">
          <Link
            to={"section3"}
            smooth={true}
            offset={0}
            duration={300}
            activeClass="active"
            spy={true}
          >
            포트폴리오 바로가기
          </Link>
        </div>
      </div>
      <Frogani />
      <Frogani2 />
      <ParallaxApp />
      <Resume />
      <Tabui />
      <Contact />
    </div>
  );
}

export default Mainvisual;

import React,{useEffect, useState} from 'react';
import { Route, Switch} from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
// import Toggle from './ToggleButton'
import {MenuItems} from './MenuItems'
import Mainlogo from './images/jmlogo.svg'

function Nav(props) {
  const [activeState, setactiveState] = useState("navbar__menu");
  const [toggleState, setToggleState] = useState("navbar__toggle");
  const [BackdropState, setBackdropState] = useState("backdrop");
  function toggle() {
    setactiveState(activeState === "navbar__menu" ? "navbar__menu active" : "navbar__menu");
    setToggleState(toggleState === "navbar__toggle" ? "navbar__toggle active" : "navbar__toggle");
    setBackdropState(BackdropState === "backdrop" ? "backdrop active" : "backdrop");
  }
const [Navscrollbar,setNavscrollbar] =useState(false);
const changeBackground = () => {
  if(window.scrollY >=200){
    setNavscrollbar(true);
  }else{
    setNavscrollbar(false);
  }
}
window.addEventListener('scroll',changeBackground);

  return(
    <nav className={Navscrollbar ? 'navbar active':Navscrollbar}>
      <div className="inner">
          <div className="navbar__logo">
              <img src={Mainlogo}></img>
          </div>
          <ul className={`${activeState}`}>
            {MenuItems.map((items,index)=>{
              return(
              <li className={items.cName} key={index}>
                <Link  to={items.id} smooth={true} offset={0} duration={300} activeClass="active" spy={true}>
                  {items.title}
                </Link> 
              </li>
              )
            })}
          </ul>
          <div className={`${toggleState}`} onClick={toggle} >
            <span></span>
          </div>
          </div>
          <div className={`${BackdropState}`} onClick={toggle} ></div>
  </nav>
  )
}










// function Nav() {
//   return(
//     <nav className="navbar">
//     <div className="inner">
//           <div className="navbar__logo">
//               <img />
//               <img />
//           </div>
//           <ul className="navbar__menu">
//             <li className="navbar__menu__item">
//               <Link  to="section1" smooth={true} offset={0} duration={300} activeClass="active" spy={true}>HOME</Link>
//               </li>
//             <li className="navbar__menu__item" >
//               <Link  to="section2" smooth={true} offset={0} duration={300}  activeClass="active" spy={true}>RESUME</Link>
//             </li>
//             <li className="navbar__menu__item">
//             <Link  to="section3" smooth={true} offset={0} duration={300}  activeClass="active" spy={true} >WORK</Link>
//             </li>
//             <li className="navbar__menu__item" >
//             <Link  to="section4" smooth={true} offset={0} duration={300}  activeClass="active" spy={true} >CONTACT</Link>
//               </li>
//           </ul>
//           <div>
//            <ToggleButton/>
//           </div>
//       </div>
//   </nav>
//   )
// }

export default Nav;
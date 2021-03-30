import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Sejong01 from '../img/sejong000.png';
import Sejong02 from '../img/sejong001.jpg';
import Sejong03 from '../img/sejong002.jpg';
import Sejong04 from '../img/sejong003.jpg';
import Sejong05 from '../img/sejong004.jpg';
import Sejong06 from '../img/sejong005.jpg';
import Sejong07 from '../img/sejong_mobile.jpg';
import Xbuttonimg from '../../../images/xbutton.svg'

const Buttons = () => {
  const history = useHistory();

  return (
    <div class="xbutton">
      <button onClick={() => history.goBack() }>
        <img src={Xbuttonimg}/>
      </button>
    </div>
  );
};


function Sejong(){
  return(
    <section className="ui_section">
        <Buttons/>
      <section className="main001 sejong_bg">
        <div className="inner">
            <div className="text">
              <span>SEJONG PAY</span><br/>Official Homepage
            </div>
            <div>
              <img src={Sejong01}/>
            </div>
        </div> 
        <div className="made">UI DESIGN, PUBLISING</div>   
      </section>
      <section className="maximg">
        <img src={Sejong02}/>
      </section>
      <section className="maximg">
        <img src={Sejong03}/>
      </section>
      <section className="maximg">
        <img src={Sejong04}/>
      </section>
      <section className="maximg">
        <img src={Sejong05}/>
      </section>
      <section className="maximg">
        <img src={Sejong06}/>
      </section>
      <section className="maximg">
        <img src={Sejong07}/>
      </section>
    </section>
  )
}

export default Sejong;
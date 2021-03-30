import React, { useState,useCallback } from 'react';
import { useHistory,   useLocation, useParams } from 'react-router-dom';
import Agripa01 from '../img/agripa001.png';
import Agripa02 from '../img/agripa002.jpg';
import Agripa03 from '../img/agripa003.jpg';
import Agripa04 from '../img/agripa004_01.png';
import Agripa05 from '../img/agripa005.jpg';
import Agripa06 from '../img/agripla006.png';
import Agripa07 from '../img/agripa007.jpg';
import Agripa08 from '../img/agripa008.jpg';
import Xbuttonimg from '../../../images/xbutton.svg'
import  '../../../../ui.scss'


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


function Agripa(){
  return(
    <section className="agripa_section">
      <Buttons/>
      <section className="main001 agripa001_bg">
          <div className="inner">
              <div className="text">
                  <span>The Agricultural Products</span><br/>Bigdata Platform
              </div>
              <div>
              <img src={Agripa01}/>
              </div>
          </div> 
          <div className="made">UI DESIGN, PUBLISING</div>   
      </section>
      <section className="agripa002">
        <img src={Agripa02}/>
      </section>
      <section className="agripa003">
        <img src={Agripa03}/>
      </section>
      <section className="agripa004">
        <img src={Agripa04}/>
      </section>
      <section className="agripa005">
        <img src={Agripa05}/>
      </section>
      <section className="agripa006">
        <img src={Agripa06}/>
      </section>
      <section className="agripa007">
        <img src={Agripa07}/>
      </section>
      <section className="agripa008">
        <img src={Agripa08}/>
      </section>
    </section>
  )
}

export default Agripa;
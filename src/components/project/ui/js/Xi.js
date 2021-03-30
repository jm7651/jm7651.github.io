import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Xi01 from '../img/xi2_000.png';
import Xi02 from '../img/xi002_001.jpg';
import Xi03 from '../img/xi002_002.jpg';
import Xi04 from '../img/xi002_003.jpg';
import Xi05 from '../img/xi002_004.jpg';
import Xi06 from '../img/xi002_005.jpg';
import Xi07 from '../img/xi002_006.jpg';
import Xi08 from '../img/xi002_007.jpg';
import Xi09 from '../img/xi002_008.jpg';
import Xi10 from '../img/xi002_009.jpg';
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


function Xi(){
  return(
    <section className="ui_section">
        <Buttons/>
      <section className="main001 hems_bg">
        <div className="inner">
            <div className="text">
              <span>XI</span><br/>EXTRA<br/> INTELLIGENT
            </div>
            <div>
              <img src={Xi01}/>
            </div>
        </div> 
        <div className="made">UI DESIGN, PUBLISING</div>   
      </section>
      <section className="maximg">
        <img src={Xi02}/>
      </section>
      <section className="maximg">
        <img src={Xi03}/>
      </section>
      <section className="maximg">
        <img src={Xi04}/>
      </section>
      <section className="maximg">
        <img src={Xi05}/>
      </section>
      <section className="maximg">
        <img src={Xi06}/>
      </section>
      <section className="maximg">
        <img src={Xi07}/>
      </section>
      <section className="maximg">
        <img src={Xi08}/>
      </section>
      <section className="maximg">
        <img src={Xi09}/>
      </section>
      <section className="maximg">
        <img src={Xi10}/>
      </section>
    </section>
  )
}

export default Xi;
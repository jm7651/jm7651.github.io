import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Hems01 from '../img/hems.png';
import Hems02 from '../img/hems001.jpg';
import Hems03 from '../img/hems002.jpg';
import Hems04 from '../img/hems003.jpg';
import Hems05 from '../img/hems004.jpg';
import Hems06 from '../img/hems005.jpg';
import Hems07 from '../img/hems006.jpg';
import Hems09 from '../img/hems008.jpg';
import Hems10 from '../img/hems009.jpg';
import Xbuttonimg from '../../../images/xbutton.svg'
import  '../../../../title.scss'

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


function Hems(){
  return(
    <section className="ui_section">
        <Buttons/>
      <section className="main001 hems_bg">
        <div className="inner">
            <div className="text">
              <span>4ST HOME</span><br/>Home Energy<br/> Monitoring system
            </div>
            <div>
              <img src={Hems01}/>
            </div>
        </div> 
        <div className="made">UI DESIGN, PUBLISING</div>   
      </section>
      <section className="hems002">
        <img src={Hems02}/>
      </section>
      <section class="movie">
        <iframe src="https://player.vimeo.com/video/499477746" width="640" height="896" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
       </section>
      <section className="maximg">
        <img src={Hems03}/>
      </section>
      <section className="maximg">
        <img src={Hems04}/>
      </section>
      <section className="maximg">
        <img src={Hems05}/>
      </section>
      <section className="maximg">
        <img src={Hems06}/>
      </section>
      <section className="maximg">
        <img src={Hems07}/>
      </section>
      <section className="maximg">
        <img src={Hems09}/>
      </section>
      <section className="maximg">
        <img src={Hems10}/>
      </section>
    </section>
  )
}

export default Hems;
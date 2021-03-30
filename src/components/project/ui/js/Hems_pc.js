import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Hemspc01 from '../img/hems_pc001.png';
import Hemspc02 from '../img/hemspc001.jpg';
import Hemspc03 from '../img/hemspc002.jpg';
import Hemspc04 from '../img/hemspc003.jpg';
import Hemspc05 from '../img/hemspc004.jpg';
import Hemspc06 from '../img/hemspc005.jpg';
import Hemspc07 from '../img/hemspc006.jpg';
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


function Hemspc(){
  return(
    <section className="ui_section">
        <Buttons/>
      <section className="main001 hemspc_bg">
        <div className="inner">
            <div className="text">
              <span>4ST HOME</span><br/>Home Energy<br/> Monitoring system
            </div>
            <div>
              <img src={Hemspc01}/>
            </div>
        </div> 
        <div className="made">UI DESIGN, PUBLISING</div>   
      </section>
      <section className="maximg">
        <img src={Hemspc02}/>
      </section>
      <section class="movie">
            <iframe src="https://www.youtube.com/embed/QZWsw2ht3yM?enablejsapi=1&version=3&playerapiid=ytplayer" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </section>
      <section className="maximg">
        <img src={Hemspc03}/>
      </section>
      <section className="maximg">
        <img src={Hemspc04}/>
      </section>
      <section className="maximg">
        <img src={Hemspc05}/>
      </section>
      <section className="maximg">
        <img src={Hemspc06}/>
      </section>
      <section className="maximg">
        <img src={Hemspc07}/>
      </section>
    </section>
  )
}

export default Hemspc;
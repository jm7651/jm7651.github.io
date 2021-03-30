import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Bems001 from '../img/bems001.png';
import Bems002 from '../img/bems002.png';
import Bems003 from '../img/bems003.gif';
import Bems004 from '../img/bems004.jpg';
import Bems005 from '../img/bems005.jpg';
import Bems006 from '../img/bems006.jpg';
import Bems007 from '../img/bems007.jpg';
import Bems008 from '../img/bems008.jpg';
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


function Bems(){
  return(
    <section className="ui_section">
        <Buttons/>
      <section className="main001 bems001">
        <div className="inner">
            <div className="text">
              <span>Building energy</span><br/>Monitoring system
            </div>
            <div>
              <img src={Bems001}/>
            </div>
        </div> 
        <div className="made">UI DESIGN, PUBLISING</div>   
      </section>
      <section className="bems002">
        <img src={Bems002}/>
      </section>
      <section className="bems003">
        <img src={Bems003}/>
      </section>
      <section className="bems004">
        <img src={Bems004}/>
      </section>
      <section className="bems005">
        <img src={Bems005}/>
      </section>
      <section className="bems006">
        <img src={Bems006}/>
      </section>
      <section className="bems007">
        <img src={Bems007}/>
      </section>
      <section className="bems008">
        <img src={Bems008}/>
      </section>
    </section>
  )
}

export default Bems;
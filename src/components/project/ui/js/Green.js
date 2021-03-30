import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Green01 from '../img/green000.png';
import Green02 from '../img/green001.jpg';
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


function Green(){
  return(
    <section className="ui_section">
        <Buttons/>
      <section className="main001 green01">
        <div className="inner">
            <div className="text">
              <span>4ST HOME</span><br/>Home Energy<br/> Monitoring system
            </div>
            <div>
              <img src={Green01}/>
            </div>
        </div> 
        <div className="made">UI DESIGN, PUBLISING</div>   
      </section>
      <section className="green01">
        <img src={Green02}/>
      </section>
    </section>
  )
}

export default Green;
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Rems_pc01 from '../img/rems_pc001.png';
import Rems_pc02 from '../img/rems_pc002.jpg';
import Rems_pc03 from '../img/rems_pc003.jpg';
import Rems_pc04 from '../img/rems_pc004.jpg';
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


function Bems(){
  return(
    <section className="ui_section">
        <Buttons/>
      <section className="main001">
        <div className="inner">
            <div className="text">
              <span>4ST Solar</span><br/>Solar Energy<br/> Monitoring system
            </div>
            <div>
              <img src={Rems_pc01}/>
            </div>
        </div> 
        <div className="made">UI DESIGN, PUBLISING</div>   
      </section>
      <section className="maximg">
        <img src={Rems_pc02}/>
      </section>
      <section className="maximg">
        <img src={Rems_pc03}/>
      </section>
      <section className="maximg">
        <img src={Rems_pc04}/>
      </section>
    </section>
  )
}

export default Bems;
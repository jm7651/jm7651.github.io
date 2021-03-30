import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Kevin01 from '../img/kevinlab001.png';
import Kevin02 from '../img/kevin001.jpg';
import Kevin03 from '../img/kevin002.jpg';
import Kevin04 from '../img/kevin003.jpg';
import Kevin05 from '../img/kevin004.jpg';
import Kevin06 from '../img/kevin005.jpg';
import Kevin07 from '../img/kevin006.jpg';
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
      <section className="main001 kevin001_bg">
        <div className="inner">
            <div className="text">
              <span>KEVINLAB</span><br/>Official Website
            </div>
            <div>
              <img src={Kevin01}/>
            </div>
        </div> 
        <div className="made">UI DESIGN, PUBLISING</div>   
      </section>
      <section className="maximg">
        <img src={Kevin02}/>
      </section>
      <section className="maximg">
        <img src={Kevin03}/>
      </section>
      <section className="maximg">
        <img src={Kevin04}/>
      </section>
      <section className="maximg">
        <img src={Kevin05}/>
      </section>
      <section className="maximg">
        <img src={Kevin06}/>
      </section>
      <section className="maximg">
        <img src={Kevin07}/>
      </section>
    </section>
  )
}

export default Bems;
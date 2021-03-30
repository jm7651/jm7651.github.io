import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Panda01 from '../img/pandac001.png';
import Panda02 from '../img/pandac002.png';
import Panda03 from '../img/pandac003.png';
import Panda04 from '../img/pandac004.png';
import Panda05 from '../img/pandac005.png';
import Panda06 from '../img/pandac006.png';
import Panda07 from '../img/pandac007.png';
import Xbuttonimg from '../../../images/xbutton.svg'
import  '../../../../title.scss'
const Buttons = () => {
  const history = useHistory();

  return (
    <div class="xbutton">
      <button onClick={() => history.goBack( ) }>
      <img src={Xbuttonimg}/>
      </button>
    </div>
  );
};


function Panda(){
  return(
    <section className="agripa_section">
       <Buttons/>
      <section className="main001 pandac001_bg">
          <div className="inner">
              <div className="text">
                  <span>PANDA CORPORATION</span><br/>Official Website
              </div>
              <div>
              <img src={Panda01}/>
              </div>
          </div> 
          <div className="made">UI DESIGN, PUBLISING</div>   
      </section>
      <section className="maximg">
        <img src={Panda02}/>
      </section>
      <section className="maximg">
        <img src={Panda03}/>
      </section>
      <section className="maximg">
        <img src={Panda04}/>
      </section>
      <section className="maximg">
        <img src={Panda05}/>
      </section>
      <section className="maximg">
        <img src={Panda06}/>
      </section>
      <section className="maximg">
        <img src={Panda07}/>
      </section>
    </section>
  )
}

export default Panda;
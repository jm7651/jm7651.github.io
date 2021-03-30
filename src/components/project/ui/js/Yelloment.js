import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Yelloment01 from '../img/yelloment.png';
import Yelloment02 from '../img/yelloment001.jpg';
import Yelloment03 from '../img/yelloment002.jpg';
import Yelloment04 from '../img/yelloment003.jpg';
import Yelloment05 from '../img/yelloment004.jpg';
import Yelloment06 from '../img/yelloment005.jpg';
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

function Yelloment(){
  return(
    <section className="ui_section">
       <Buttons/>
      <section className="main001 yelloment_bg">
          <div className="inner">
              <div className="text">
                  <span>Yelloment</span><br/>
                  The Agricultural Products
              </div>
              <div>
              <img src={Yelloment01}/>
              </div>
          </div> 
          <div className="made">UI DESIGN, PUBLISING</div>   
      </section>
      <section className="yelloment001">
        <img src={Yelloment02}/>
      </section>
      <section className="yelloment002">
        <img src={Yelloment03}/>
      </section>
      <section className="maximg">
        <img src={Yelloment04}/>
      </section>
      <section className="maximg">
        <img src={Yelloment05}/>
      </section>
      <section className="maximg">
        <img src={Yelloment06}/>
      </section>
    </section>
  )
}

export default Yelloment;
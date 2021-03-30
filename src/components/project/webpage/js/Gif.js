import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Letsrunimg001 from '../img/letsrun001.jpg';
import Letsrunimg002 from '../img/letsrun002.jpg';
import Letsrunimg003 from '../img/letsrun003.jpg';
import Letsrunimg004 from '../img/letsrun004.gif';
import Xbuttonimg from '../../../images/xbutton.svg'
import { Button } from 'react-scroll';

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


function Sangse001(){
  return(
    <section className="maximg">
       <Buttons/>
      <div className="maximg">
        <img src={Letsrunimg001}/>
      </div>
      <div className="maximg">
        <img src={Letsrunimg002}/>
      </div>
      <div>
      <img src={Letsrunimg003}/>
      </div>
      <div>
      <img src={Letsrunimg004}/>
      </div>
    </section>
  )
}

export default Sangse001;
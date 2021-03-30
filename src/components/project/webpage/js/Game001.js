import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Gameimg01 from '../img/bal001.jpg';
import Gameimg02 from '../img/bal002.jpg';
import Gameimg03 from '../img/bal.gif';
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


function Game001(){
  return(
    <section className="maximg benz">
       <Buttons/>
      <div className="maximg">
        <img src={Gameimg01}/>
      </div>
      <div className="maximg">
        <img src={Gameimg02}/>
      </div>
      <div className="maximg">
        <img src={Gameimg03}/>
      </div>
    </section>
  )
}

export default Game001;
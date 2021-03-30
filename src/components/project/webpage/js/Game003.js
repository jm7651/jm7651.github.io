import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Gameimg01 from '../img/rhythm001.jpg';
import Gameimg02 from '../img/rhythm002.gif';
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


function Game003(){
  return(
    <section className="maximg">
       <Buttons/>
      <div className="maximg">
        <img src={Gameimg01}/>
      </div>
      <div className="maximg">
        <img src={Gameimg02}/>
      </div>
    </section>
  )
}

export default Game003;
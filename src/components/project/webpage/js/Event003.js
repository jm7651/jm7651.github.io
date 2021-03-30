import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Sangseimg001 from '../img/halla.jpg';
import Sangseimg002 from '../img/sejong_card.jpg';
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


function Sangse003(){
  return(
    <section className="maximg">
       <Buttons/>
      <div className="maximg">
        <img src={Sangseimg001}/>
      </div>
      <div className="maximg">
        <img src={Sangseimg002}/>
      </div>
    </section>
  )
}

export default Sangse003;
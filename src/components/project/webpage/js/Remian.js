import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Remianimg001 from '../img/remian001.jpg';
import Remianimg002 from '../img/remian002.jpg';
import Remianimg003 from '../img/remian003.jpg';
import Remianimg004 from '../img/remian004.jpg';
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


function Remian(){
  return(
    <section className="maximg">
       <Buttons/>
      <div className="maximg">
        <img src={Remianimg001}/>
      </div>
      <div className="maximg">
        <img src={Remianimg002}/>
      </div>
      <div>
      <img src={Remianimg003}/>
      </div>
      <div>
      <img src={Remianimg004}/>
      </div>
      <div class="movie">
        <iframe src="https://www.youtube.com/embed/-dVus5ymwQI?enablejsapi=1&version=3&playerapiid=ytplayer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </section>
  )
}

export default Remian;
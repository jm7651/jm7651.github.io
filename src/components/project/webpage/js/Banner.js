import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Banner001 from '../img/banner001.jpg';
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


function Banner(){
  return(
    <section className="maximg">
       <Buttons/>
      <div>
        <img src={Banner001}/>
      </div>
    </section>
  )
}

export default Banner;
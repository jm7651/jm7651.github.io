import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Benz01 from '../img/benz001.png';
import Benz02 from '../img/benz002.png';
import Xbuttonimg from '../../../images/xbutton.svg'
import { Button } from 'react-scroll';

const Buttons = () => {
  const history = useHistory();

  return (
    <div class="xbutton">
      <button onClick={() => history.goBack(1) }>
        <img src={Xbuttonimg}/>
      </button>
    </div>
  );
};


function Benz(){
  return(
    <section className="benz">
       <Buttons/>
      <div className="maximg benz">
        <img src={Benz01}/>
      </div>
      <div className="maximg benz">
        <img src={Benz02}/>
      </div>
    </section>
  )
}

export default Benz;
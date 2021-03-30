import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Sangseimg001 from '../img/tomato.jpg';
import Sangseimg002 from '../img/tangerine.jpg';
import Sangseimg003 from '../img/sukru.jpg';
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
       <div className="flex_row_m_column">
      <div className="maximg">
        <img src={Sangseimg001}/>
      </div>
      <div className="maximg">
        <img src={Sangseimg002}/>
      </div>
      <div className="maximg">
      <img src={Sangseimg003}/>
      </div>
      </div>
    </section>
  )
}

export default Sangse001;
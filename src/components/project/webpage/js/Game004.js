import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Gameimg01 from '../img/gif001.gif';
import Gameimg02 from '../img/gif002.gif';
import Gameimg03 from '../img/gif003.gif';
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


function Game004(){
  return(
    <section className="maximg">
       <Buttons/>
       <div className="flex_row_m_column_center">
      <div className="maximg">
        <img src={Gameimg01}/>
      </div>
      <div className="maximg">
        <img src={Gameimg02}/>
      </div>
      <div className="maximg">
        <img src={Gameimg03}/>
      </div>
      </div>
    </section>
  )
}

export default Game004;
import React, { useState } from 'react';
import Data from './tab3_data.js';
import '../main.css';
import {Link, Route, Switch} from 'react-router-dom';
import ModalVideo from 'react-modal-video'

function Workwebpage() {
  let [ 데이터, 데이터변경 ] = useState(Data);


  return(
    <div className="work__projects" id="section3">
      <div className="content">
        {
          데이터.map((a,i)=>{
            return <Projectfile data ={데이터[i]}/>
          })
        }
      </div>
    </div>
  )
}

function Projectfile(props){
  let [isOpen, setOpen] = useState(false);
  return(
    <React.Fragment>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={props.data.url} onClose={() => setOpen(false)} />
    <li className="project">
    <Link className="btn-primary" onClick={()=> setOpen(true)}>
    <img className="project__img" src={props.data.image}></img>
    <div class="project__desc1">
      <h3>{props.data.title}</h3>
      <span>{props.data.content}</span>
    </div>
    </Link>
  </li>
  </React.Fragment>
  )
}


export default Workwebpage;
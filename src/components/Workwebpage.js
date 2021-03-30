import React, { useState } from "react";
import Data from "./tab2_data.js";
import "../main.css";
import { Link, Route, Switch } from "react-router-dom";

function Workwebpage() {
  let [데이터, 데이터변경] = useState(Data);

  return (
    <div className="work__projects" id="section3">
      <div className="content">
        {데이터.map((a, i) => {
          return <Projectfile key={a} data={데이터[i]} />;
        })}
      </div>
    </div>
  );
}

function Projectfile(props) {
  return (
    <li className="project">
      <Link to={props.data.url}>
        <img className="project__img" src={props.data.image}></img>
        <div class="project__desc1">
          <h3>{props.data.title}</h3>
          <span>{props.data.content}</span>
        </div>
      </Link>
    </li>
  );
}

export default Workwebpage;

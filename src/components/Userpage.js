import React from "react";
import {NavLink, BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import { RoutedTabs, NavTab } from "react-router-tabs";
import Workui from './Workui.js'
import Workwebpage from './Workwebpage.js'
import Workmotion from './Workmotion.js'
import Slider from './Slider'

function UsersPage(){
  return (
    <Router>
    <nav>
      <NavLink exact to="/">
        Tab A
      </NavLink>
      <NavLink exact to="/Webpage">
        Tab B
      </NavLink>
      <NavLink exact to="/Motion">
        Tab B
      </NavLink>
      <NavLink exact to="/2d_3d">
        Tab B
      </NavLink>

    </nav>

    <div>
      <Switch>
        <Route exact path="/"><Workui/></Route>
        <Route exact path="/Webpage"><Workwebpage/></Route>
        <Route exact path="/Motion"><Workmotion/></Route>
        <Route exact path="/2d_3d"><Slider/></Route>
      </Switch>
    </div>
  </Router>
  )
}

export default UsersPage;
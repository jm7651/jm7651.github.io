import React, { useState } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import ScrollRestoration from "react-scroll-restoration";
import Mainvisual from "./Mainvisual.js";
import Agripa from "./project/ui/js/Agripa.js";
import Panda from "./project/ui/js/Panda.js";
import Yelloment from "./project/ui/js/Yelloment.js";
import Hems from "./project/ui/js/Hems.js";
import Solar from "./project/ui/js/Solar.js";
import Bems from "./project/ui/js/Bems.js";
import Kevin from "./project/ui/js/Kevin.js";
import Rems_pc from "./project/ui/js/Rems_pc.js";
import Hems_pc from "./project/ui/js/Hems_pc.js";
import Sejong from "./project/ui/js/Sejong.js";
import Xi from "./project/ui/js/Xi.js";
import Green from "./project/ui/js/Green.js";
import Benz from "./project/webpage/js/Benz.js";
import Banner001 from "./project/webpage/js/Banner.js";
import Game001 from "./project/webpage/js/Game001.js";
import Game002 from "./project/webpage/js/Game002.js";
import Game003 from "./project/webpage/js/Game003.js";
import Game004 from "./project/webpage/js/Game004.js";
import Event001 from "./project/webpage/js/Event001.js";
import Event002 from "./project/webpage/js/Event002.js";
import Event003 from "./project/webpage/js/Event003.js";
import Letsrun from "./project/webpage/js/Letsrun.js";
import Remian from "./project/webpage/js/Remian.js";

function UiRoute() {
  return (
    <Router basename="/portfolio">
      <ScrollRestoration />
      <Switch>
      <Route path="/Remian" component={Remian}>
          <ScrollToTop>
            <Remian />
          </ScrollToTop>
        </Route>
      <Route path="/Letsrun" component={Letsrun}>
          <ScrollToTop>
            <Letsrun />
          </ScrollToTop>
        </Route>
      <Route path="/Event003" component={Event003}>
        <ScrollToTop>
          <Event003 />
        </ScrollToTop>
      </Route>  
      <Route path="/Event002" component={Event002}>
        <ScrollToTop>
          <Event002 />
        </ScrollToTop>
      </Route>
      <Route path="/Event001" component={Event001}>
          <ScrollToTop>
            <Event001 />
          </ScrollToTop>
      </Route>
      <Route path="/Game004" component={Game004}>
          <ScrollToTop>
            <Game004/>
          </ScrollToTop>
      </Route>
      <Route path="/Game003" component={Game003}>
          <ScrollToTop>
            <Game003 />
          </ScrollToTop>
      </Route>
      <Route path="/Game002" component={Game002}>
          <ScrollToTop>
            <Game002 />
          </ScrollToTop>
      </Route>
      <Route path="/Game001" component={Game001}>
          <ScrollToTop>
            <Game001 />
          </ScrollToTop>
        </Route>
        <Route path="/Banner" component={Banner001}>
          <ScrollToTop>
            <Banner001 />
          </ScrollToTop>
        </Route>
        <Route path="/Benz" component={Benz}>
          <ScrollToTop>
            <Benz />
          </ScrollToTop>
        </Route>
        <Route path="/Green" component={Green}>
          <ScrollToTop>
            <Green />
          </ScrollToTop>
        </Route>
        <Route path="/Xi" component={Xi}>
          <ScrollToTop>
            <Xi />
          </ScrollToTop>
        </Route>
        <Route path="/Sejong" component={Sejong}>
          <ScrollToTop>
            <Sejong />
          </ScrollToTop>
        </Route>
        <Route path="/Hems_pc" component={Hems_pc}>
          <ScrollToTop>
            <Hems_pc />
          </ScrollToTop>
        </Route>
        <Route path="/Rems_pc" component={Rems_pc}>
          <ScrollToTop>
            <Rems_pc />
          </ScrollToTop>
        </Route>
        <Route path="/Kevin" component={Kevin}>
          <ScrollToTop>
            <Kevin />
          </ScrollToTop>
        </Route>
        <Route path="/Bems" component={Bems}>
          <ScrollToTop>
            <Bems />
          </ScrollToTop>
        </Route>
        <Route path="/Solar" component={Solar}>
          <ScrollToTop>
            <Solar />
          </ScrollToTop>
        </Route>
        <Route path="/Hems" component={Hems}>
          <ScrollToTop>
            <Hems />
          </ScrollToTop>
        </Route>
        <Route path="/Yelloment" component={Yelloment}>
          <ScrollToTop>
            <Yelloment />
          </ScrollToTop>
        </Route>
        <Route path="/Panda" component={Panda}>
          <ScrollToTop>
            <Panda />
          </ScrollToTop>
        </Route>
        <Route path="/Agripa">
          <ScrollToTop>
            <Agripa />
          </ScrollToTop>
        </Route>
        <Route path="/">
          <Mainvisual />
        </Route>
      </Switch>
    </Router>
  );
}

export default UiRoute;

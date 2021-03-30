import logo from "./logo.svg";
import "./App.css";
import "./main.css";
import Nav from "./components/nav.js";
import Resume from "./components/resume.js";
import "./title.scss";
import Workui from "./components/Workui.js";
import UiRoute from "./components/Uiroute.js";
import Mainvisual from "./components/Mainvisual.js";
import { AppProvider } from "./contextApi";
// import Workui from './components/tab1.js'
// import Ui0 from './components/Ui0.js'
// import Ui1 from './components/Ui1.js'
// import Ui2 from './components/Ui2.js'
// import Ui3 from './components/Ui3.js'
// import Ui4 from './components/Ui4.js'
// import {Link, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <AppProvider>
      <div className="App">
        <UiRoute />
        {/* <div className="section_div" id="section1">1</div>
  <div className="resume" id="section2">2</div>
  <div className="section_div" id="section3">3</div>
  <div className="section_div" id="section4">4</div> */}
      </div>
    </AppProvider>
  );
}

export default App;

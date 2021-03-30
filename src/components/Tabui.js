import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Workui from "./Workui.js";
import Workwebpage from "./Workwebpage.js";
import Workmotion from "./Workmotion.js";
import Slider from "./Slider";
import { AppConsumer } from "../contextApi/index.js";

const TAB_MENU_LIST = ["UI", "WEB", "MOTION", "2D,3D"];
const TAB_ITEMS = [<Workui />, <Workwebpage />, <Workmotion />, <Slider />];

function Tabui() {
  let [누른탭, 누른탭변경] = useState(0);
  let [activeState, setActiveState] = useState("tab-link");
  const toggleTab = (index) => {
    누른탭변경(index);
  };

  return (
    <AppConsumer>
      {({ state, actions }) => {
        console.log("state", state);
        return (
          <Tabs defaultIndex={state.tabIndex} className="tabui" id="section3">
            <TabList>
              {TAB_MENU_LIST.map((item, index) => (
                <Tab key={item} onClick={() => actions.setTabIndex(index)}>
                  {item}
                </Tab>
              ))}
            </TabList>
            {TAB_ITEMS.map((item) => (
              <TabPanel key={item}>{item}</TabPanel>
            ))}
          </Tabs>
        );
      }}
    </AppConsumer>
  );
}

// function TabContent(props){
//   if(props.누른탭 === 0){
//     return <Workui/>
//   } else if(props.누른탭 === 1){
//     return  <Resume/>
// } else if(props.누른탭 === 2){
//   return  null
// }else if(props.누른탭 === 3){
//   return  <Drawing/>
// }
// }

export default Tabui;

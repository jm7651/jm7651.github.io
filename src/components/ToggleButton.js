import React, { useState } from "react";

export default function Toggle(props) {
  const [toggleState, setToggleState] = useState("navbar__toggle");

  function toggle() {
    setToggleState(toggleState === "navbar__toggle" ? "navbar__toggle active" : "navbar__toggle");
  }

  return <div className={`${toggleState}`} onClick={toggle} >
    <span></span>
  </div>;
}


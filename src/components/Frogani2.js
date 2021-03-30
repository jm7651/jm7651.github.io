import React, { useState } from 'react';
import Lottie from 'react-lottie';
import Frogani from './images/Frogani.json';

export default function App() {
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: Frogani,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  
  return (
    <div className="visualfrog2">
      <Lottie 
	    options={defaultOptions}
        // width={180}
      />
    </div>
  );
}
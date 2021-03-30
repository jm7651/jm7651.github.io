import React, { useState, useCallback } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import imgdata from './Drawingimg';
import './Drawing.css'




function SliderFunction(props){
  
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1000,
        autoplaySpeed:3000,
        }
      }
    ]
  };
  let [이미지,이미지변경] = useState(imgdata);
   console.log(이미지[0].image);
   return (    
     
    <div className="slider_container">
      <Slider {...settings}>
       {이미지.map((a,i)=>{
         return(
           <div className="slideimgdiv">
             <div className="slidetitle">{이미지[i].title}</div>
             <img className="slideimgsize" src={이미지[i].image}></img>
           </div>
         )
       })}
      </Slider>
    </div>
  );
}


// function ImgSliderImg(){
//   let [이미지,이미지변겅] = useState(imgdata);
//   return(
//         이미지.map((a,i)=>{
//           return <ImgSliderfile data={이미지[i]}/>
//         })
//     )
//   }




function ImgSliderfile(props){
  return(
    <div>
    {/* <div class="slider_title">{props.data.title}</div> */}
    <img className="slider_image" src={props.data.image}></img>
    </div>
  )
}

export default SliderFunction


import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ScrollAnimation from 'react-scroll-animation';
import Solar01 from '../img/main_solar.jpg';
import Solaricon from '../img/solar_ico.jpg';
import Solar02 from '../img/solar_bg03.jpg';
import Solar03 from '../img/solar_bg04.jpg';
import Solar04 from '../img/solar_bg05.jpg';
import Xbuttonimg from '../../../images/xbutton.svg'

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


function Hems(){
  return(
    <section className="ui_section">
        <Buttons/>
      <section className="main001 solar01_bg">
        <div className="inner">
            <div className="text">
            <span>Solar energy</span><br/>monitoring system
            </div>
            <div>
              <img src={Solar01}/>
            </div>
        </div> 
        <div className="made">UI DESIGN, PUBLISING</div>   
      </section>
      <section className="solar02_p" id="container">
            <div className="inner">
            <ScrollAnimation animateIn="fadeIn">
                    <img src={Solaricon}/>
               </ScrollAnimation>
               <ScrollAnimation animateIn="fadeIn">신재생 에너지 통합 모니터링 시스템 REMS</ScrollAnimation>
               <ScrollAnimation animateIn="fadeIn"> 지금까지 통합 모니터링 시스템이 구축되기 전에는,기존 1~4호 태양광 발전소 각각에 사용된 인버터 (태양광 발전소에서 발생한 직류 전력을 교류로 바꿔주는 설비) 메이커에서 제공하는 관리 프로그램을 통해서만 발전소 운전 및 발전량을 확인할 수 있었습니다.
               </ScrollAnimation>
            </div>   
        </section>
        <section className="solar03_p">
        <ScrollAnimation animateIn="fadeIn">
                <div className="circle_p ">
                    <span className="circle"><span>태양광</span></span>
                    <span className="circle"><span>태양열</span></span>
                    <span className="circle"><span>지열</span></span>
                    <span className="circle"><span>연료전지</span></span>
                    <span className="circle"><span>풍력</span></span>
                    </div>
                <div>
                    <div className="solar03_img">
                        <img src={Solar02}/>
                    </div>
                </div>
          </ScrollAnimation>
        </section>
        <section className="solar04_p">
            <div>
                <img src={Solar03}/>
            </div>   
        </section>
         <section className="solar05_p">
             <div>
                <img src={Solar04}/>
            </div>      
        </section>
    </section>
  )
}

export default Hems;
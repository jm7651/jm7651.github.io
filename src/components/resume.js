import React from 'react';
import  '../title.scss'
import  '../animate.min.css'
import Frogcamp from './images/frogcamp.png'
import ScrollAnimation from 'react-scroll-animation';
// import "animate.css/animate.min.css";

function Resume() {
  return(
  <section className="resume" id="section2">
    <div className="inner1">
        <div>resume</div>
        <div>
            <div>Design is<br></br>My <span className="textstroke">language</span></div>
            <div className="waterwave">
                <div className="watershape">
                </div>
            </div>
        </div>
    </div>
    <div class="inner2">
        <div class="resume_div">
            <h4>2020.05 ~ now</h4>
            <span>판다코퍼레이션 ui / ux 디자이너</span>
        </div>
        <div class="resume_div">
            <h4>2018.05 ~2020.05</h4>
            <span>케빈랩 ui / ux 디자이너</span>
        </div>
        <div class="resume_div">
            <h4>2017.11 ~ 2018.04</h4>
            <span>마이다스아이티 디자인팀(프리랜서)</span>
        </div>
        <div class="resume_div">
            <h4>2016.02 ~ 2017.10</h4>
            <span>비엑소엑소(디자인 외주및 스마트스토어 운영)</span>
        </div>
        <div class="resume_div">
            <h4>2013.09 ~ 2015.08</h4>
            <span>삼성전자 디자인그룹(계약직)</span>
        </div>
        <div class="resume_div">
            <h4>2010.03 ~ 2011.03</h4>
            <span>엠게임 포털사업부 디자인팀</span>
        </div>
    </div>
    <ScrollAnimation animateIn="fadeIn">
    <img class="frogcamp" src={Frogcamp}/>
    </ScrollAnimation>
  </section>
  )
}

export default Resume;
import { useEffect, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import Waterimg from "./images/waterbg.jpg";
import Frogimg from "./images/frogbg.jpg";
import Waterani from "./images/waterani.mp4";
import Frogbig from "./images/frogbig.svg";
import { useWindowSize } from "react-window-size-hooks";
import ScrollAnimation from "react-scroll-animation";

export default function ParallaxApp() {
  const { width, height } = useWindowSize();
  const [position, setPosition] = useState(0);
  function onScroll() {
    console.log(window.scrollY);
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  let parallax01;
  if (width > 450) {
    let scale = position / 500;
    let postionLimit = 4600;
    if (position > postionLimit) {
      scale = postionLimit / 500;
    }

    parallax01 = { transform: `scale(${scale})` };
  } else {
    let scale = position / 1500;
    let postionLimit = 3000;
    if (position > postionLimit) {
      scale = postionLimit / 1500;
    }
    parallax01 = { transform: `scale(${scale})` };
  }

  let parallaxStyle;
  if (width > 450) {
    parallaxStyle = { backgroundColor: "pink" };
  } else {
    parallaxStyle = { backgroundColor: "black" };
  }
  return (
    <ParallaxProvider>
      <div className="para_wrapper">
        <div className="para_flex0">
          <div className="paraflex0_left">
            <div>UX.UI DESIGN</div>
            <div className="para_box">
              <div className="wave -one"></div>
              <div className="wave -two"></div>
              <div className="wave -three"></div>
              <div className="wave_title">井中之蛙</div>
            </div>
            <div>
              <div>"우물안 개구리"</div>
              멀리 또 높게 뛰는 개구리처럼 도약하기 위해 준비합니다 어떻게 해야
              더 좋은 디자인을 할 수 있을지를 계속해서 질문하고 사용자 경험을
              바탕으로 디자인합니다.
              <div class="pointtext">
                사용자중심의 디자인, 사고, 미학을 관점으로
              </div>
              쉽고 간결한 디자인, 아름답고 유려한 디자인을 하고 싶습니다.
              새로움을 공부하고 기본을 잊지않는 디자이너가 되겠습니다.
              <br />
            </div>
          </div>
          <div className="paraimg01">
            <img src={Frogimg}></img>
          </div>
        </div>
        <div className="text_para">
          <Parallax className="zindextext" x={[-45, 50]} tagOuter="figure">
            <div className="para_designer">
              <div>
                Just Do it <span>for me</span>
              </div>
            </div>
          </Parallax>
          <Parallax className="zindextext" x={[40, -50]} tagOuter="figure">
            <div className="para_designer">
              <div>
                Creative <span>and passionate</span>
              </div>
            </div>
          </Parallax>
          <Parallax className="zindextext" x={[-25, 55]} tagOuter="figure">
            <div className="para_designer">
              <div>
                Design inside <span>the mind</span>
              </div>
            </div>
          </Parallax>
          <div>
            <video className="videoani" autoPlay loop muted playsInline>
              <source src={Waterani} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="concept_bg">
          <div class="text-scroller">
            <div className="scroller-left">
              <div className="werd">
                Good People, Good Design Good People, Good Design
              </div>
            </div>
            <div className="scroller-right">
              <div className="werd">
                Good People, Good Design Good People, Good Design
              </div>
            </div>
          </div>
          <div className="para_flex1">
            {/* <ScrollAnimation animateIn="fadeIn"  offset="0" s> */}
            <img src={Frogbig} style={parallax01} />
            {/* </ScrollAnimation> */}
            <div>
              <div>
                <div className="para_title">SKILL</div>
                <div>
                  Strategy
                  <br />
                  Brand Identities
                  <br />
                  Art Direction
                  <br />
                  UI/UX Design
                  <br />
                  Front End
                </div>
              </div>
              <div>
                <div className="para_title">SIMPLE & EASY</div>
                <div>
                  <div>
                    UX디자인은 무의식적인 경험을 바탕으로 합니다
                    <br />
                    사용자는 지금까지 경험을 토대로 무의식가운데서 제품을
                    이용합니다
                    <br />
                    이 사용자의 패턴을 연구하며 그 흐름이 끊기지 않도록
                    유지적으로 연결하는것이 중요합니다
                    <br />
                    내가 사용자라면 어떻게 이용할까?
                    <br />
                    끊임없이 질문하며 디자인을 정의합니다
                    <br />
                    상호작용하는 디자인은 직관적이며 간편해야합니다
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
}

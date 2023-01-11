import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import AlianceSlider from "./AlianceSlider";

import data from "data/afl_list.json";


const TOTAL_SLIDES = 4; // 전체 슬라이드 개수(총3개. 배열로 계산)

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isRunning, setIsRunning] = useState(true) // 시작 정지
  const slideRef = useRef(null);
  const IMG_WIDTH = 404;
  const slideRange = currentSlide *IMG_WIDTH;

  // 일정 시간 이후 반복
  function useInterval(callback, delay) {
      // ref 객체 생성
      const savedCallback = useRef()

      useEffect(() => {
      // 새로 렌더링 할 때마다 새로운 callback을 ref 객체로 저장한다
      savedCallback.current = callback
      })

      useEffect(() => {
          function tick() {
              // 최근 callback
              savedCallback.current();
          }

          /*Using delay instead of isRunning because useEffect won't trigger a re-render when a boolean changes
          Whereas delay here is a parameter which isn't a boolean, and changes depending on isRunning state. 
          */
          if (delay !== null) {
              let timer = setInterval(tick, delay)
              return () => clearInterval(timer)
          }
      }, [delay])
  }

  const Pause = () => {
    setIsRunning(!isRunning);
  };

  // Next 버튼 클릭 시
  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면
      setCurrentSlide(0); // 1번째 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      // 아니면 1장씩 넘긴다
      setCurrentSlide(currentSlide + 1);
    }
  };
  // Prev 버튼 클릭 시
  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES); // 마지막 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      // 1장 전으로 돌린다
      setCurrentSlide(currentSlide - 1);
    }
  };

  // slideRef가 뭘까 - useRef
  useEffect(() => {
    slideRef.current.style.transition = "all 0.35s ease-out";
    // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
    slideRef.current.style.transform = `translateX(-${slideRange}px)`;
  }, [currentSlide]);

    // isRunning이 true면 시작, 아니면 중지
    // callback이 NextSlide 기능과 같으므로 NextSlide를 집어넣었다.
    useInterval(NextSlide, isRunning ? 2000 : null)


  return (
    <Container>
      <Right>
        <CarouselIcon onClick={PrevSlide} src="icon/btn_goods_prev.png" />
        <CarouselIcon onClick={Pause} src={isRunning ? "icon/btn_goods_pause2.png": "icon/btn_goods_play2.png"} />
        <CarouselIcon onClick={NextSlide} src="icon/btn_goods_next.png" />
      </Right>
      <SliderContainer ref={slideRef}>
        {data.carousel.map((el) => (
          <>
            <AlianceSlider key={el.title} title={el.title} desc={el.desc} img={el.img} />
          </>
        ))}
      </SliderContainer>
    </Container>
  );
}
const Container = styled.div`
  border-top: 2px #000 solid;
  overflow: hidden; // 선을 넘어간 이미지들은 숨겨줍니다.
`;

const SliderContainer = styled.div`
  width: 852px;
  height: 268px;
  display: flex; // 이미지들을 가로로 나열합니다.
  
  padding-top: 15px;
`;

const Right = styled.div`
  text-align: end;
  padding-top: 10px;
`;

const CarouselIcon = styled.img`
  width: 25px;
  height: 25px;
`;

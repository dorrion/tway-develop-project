import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import AlianceSlider from "./AlianceSlider";
import data from "data/afl_list.json";

const TOTAL_SLIDES = 4; // 전체 슬라이드 개수(총3개. 배열로 계산)

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  // Next 버튼 클릭 시
  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면
      setCurrentSlide(0); // 1번째 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  // Prev 버튼 클릭 시
  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES); // 마지막 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <Container>
      <Right>
        <CarouselIcon onClick={PrevSlide} src="icon/btn_goods_prev.png" />
        <CarouselIcon src="icon/btn_goods_pause2.png" />
        <CarouselIcon onClick={NextSlide} src="icon/btn_goods_next.png" />
      </Right>
      <SliderContainer ref={slideRef}>
        {data.carousel.map((el) => (
          <>
            <AlianceSlider key={el.id} title={el.title} desc={el.desc} img={el.img} />
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

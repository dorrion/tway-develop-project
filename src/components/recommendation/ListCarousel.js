/* eslint-disable */
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import arrow from 'assets/icon/ico_route_goods.png'
import pause from 'assets/icon/bg_pause2.png'
import play from 'assets/icon/bg_play2.png'
import prevBtn from 'assets/icon/btn_goods_prev.png'
import nextBtn from 'assets/icon/btn_goods_next.png'

const ContentContainer = styled.div`
  height : 480px;
  margin: 10px;
  padding: 0 10px;
  
  .wrapper {
    width: 1280px;
    margin-left: 6%;
    overflow: hidden;
  }
`
const FlightsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height : 450px;
  margin: 0;
  padding-left: 60px;
`
const FlightLi = styled.li`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  border-radius: 5px;
  margin: 0 10px 10px;
  width: 590px;
  height : 75px;
  background-color: ${props => props.theme.gray};
  color : #fff;
  font-size: 18px;
  font-weight: 500;
`
const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Paging = styled.div`
  position: relative;
  right: 1.5%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Indicator = styled.div`
width: 8px;
height: 8px;
background-color: lightgrey;
border-radius: 10px;
margin: 5px;
`

function useInterval(callback, delay) {
  const savedCallback = useRef(); // 최근에 들어온 callback을 저장할 ref를 하나 만든다.

  useEffect(() => {
    savedCallback.current = callback; // 렌더링 시 마다 ref를 업데이트 해준다.
  });

  useEffect(() => {
    function tick() { // callback 함수를 실행시키는 함수 
      savedCallback.current(); 
    }

    if (delay !== null) { // 만약 delay가 null이 아니라면 
      let timer = setInterval(tick, delay)// delay에 맞추어 interval을 새로 실행시킨다.
      return () => clearInterval(timer) // unmount될 때 clearInterval을 해준다.
    }
  }, [delay]) // delay가 바뀔 때마다 새로 실행된다.
}

export const FlightList = ({flights}) => {
  const [isRunning, setIsRunning] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
    const [focused, setFocused] = useState(0);

  const slideRef = useRef(null);
  const amountOfData = flights.length; 
  const slideWidth = 1280;
  const slideRange = currentPage * slideWidth;
  const totalSlides = Math.ceil(amountOfData / 10) - 1;

  const division = (<span style={{fontWeight: 300}}>|</span>)

  const flightLi = flights.map(list => (
  <FlightLi key={list.id}>
    <span>{list.date} </span>
    {division}

    <span>{list.departure}</span>
    <span>
      <img src={arrow} />
    </span> 
    <span>{list.destination}</span>

    {division}

    <PriceContainer>
      <span style={{fontSize: "14px"}}>KRW</span>
      <span>{list.price}</span>
    </PriceContainer>

    {division}

    <span>{list.about}</span>
  </FlightLi>
  ));
  
  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${slideRange}px)`;
    setFocused(currentPage);
  }, [currentPage]);

  const next = () => {
    if (currentPage >= totalSlides) setCurrentPage(0);
    else setCurrentPage(currentPage + 1);
  };

  const prev = () => {
    if (currentPage === 0) return;
    setCurrentPage(currentPage - 1);
  };

  const stopMoving = () => {
    setIsRunning(!isRunning);
  }

    // isRunning이 true면 시작, 아니면 중지
    // callback이 NextSlide 기능과 같으므로 NextSlide를 집어넣었다.
    useInterval(next, isRunning ? 2000 : null)

  return (
    <>
      <ContentContainer>
        <div className='wrapper'>

          <FlightsContainer ref={slideRef}>
            {flightLi}
          </FlightsContainer>
        </div>

        <Paging>
          {flights.map(el => {
            if(el.id <= totalSlides) {
          return <Indicator 
              key={el.id} 
              onClick={() => { 
                setCurrentPage(el.id);
                setFocused(el.id);
              }} 
              style={focused === el.id ? {backgroundColor: 'gray'} : {backgroundColor:'lightgray'} }
              /> 
            }

          })}

          <div onClick={() => {
            stopMoving();
          }}>
            <img src={isRunning ? pause : play}/>
          </div>
        </Paging>
      </ContentContainer>

        <div onClick={()=> prev()} style={{position:'absolute', top: '50%', transform: 'translateY(-50%)', left: '3%'}}>
          <img src={prevBtn}/>
        </div>

        <div onClick={()=> next()} style={{position:'absolute', top: '50%', transform: 'translateY(-50%)', right: '3%'}}>
          <img src={nextBtn} />
        </div>
    </>
  )
}

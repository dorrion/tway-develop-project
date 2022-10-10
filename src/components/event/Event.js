/* eslint-disable */
import styled from 'styled-components';
import {useState, useRef, useEffect} from 'react';
import {AdContent} from './AdContent';
import ModalContent from './ModalContent';
import {dummyData} from '../../data/Event_dummyData';
import {createGlobalStyle} from 'styled-components';

// import NanumGothic from "../../assets/fonts/NanumGothic.woff";
import plusBtn from '../../assets/icon/ico_btn_more.png';
import leftBtn from '../../assets/icon/btn_goods_prev.png';
import rightBtn from '../../assets/icon/btn_goods_next.png';
import pause from '../../assets/icon/bg_pause2.png';
import play from '../../assets/icon/bg_play2.png';

export const GlobalStyle = createGlobalStyle`

    box-sizing : border-box;
    margin : 0;
    padding : 0;
`;

export const Modal = styled.div`
  display : ${(props) => props.props === true ? 'flex' : 'none'};
  /* opacity : ${(props) => props.props === true ? 100 : 0}; */
  position : absolute;
  width : 80%;
  height : 600px;
  overflow : auto;

  transition : .5s ease;

  left :10%;


  background-color : rgba(255,255,255);

  box-shadow : 5px 5px 15px #afafaf;
  z-index : 10;

  > button {
    position : absolute;
    right : 10px;
    top : 10px;

    width : 30px;
    height : 30px;

    background-color : #ff8585;
    border : none;
    color : white;

    cursor: pointer;

    &:hover {
    background-color : #ff4343;

    }
  }

  
`


export const EventArea = styled.div`
  width: 100vw;
  height: 582px;

  display: flex;
  flex-direction: column;

  align-items: center;

  background-color: #ffffff;
  /* border: 1px solid gray; */
`;

export const Header = styled.div`
  width: 1050px;
  height: 70px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  /* border : 1px solid black; */

  margin-top: 50px;

  > .plusBtn {
    position: relative;
    right: -460px;

    margin-top: 5px;
    z-index: 1;

    &:hover {
      cursor: pointer;
    }
  }

  > .title {
    /* position : absolute; */
    /* left : 10px;
        right : 10px; */
    align-content: center;
    font-size: 30px;
    font-weight: bold;
  }
`;

export const Carousel = styled.div`
  width: 100%;
  height: 400px;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  /* border : 1px solid red; */

  > .slide {
    height: 300px;
    width: 1500px;

    margin-top: 40px;
    margin-bottom: 30px;

    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;

    /* background-color : #f3f3f3; */
    /* border : 1px solid blue; */

    > .leftBtn {
      margin-right: 20px;
      &:hover {
        cursor: pointer;
      }
    }

    > .rightBtn {
      margin-left: 20px;
      &:hover {
        cursor: pointer;
      }
    }

    > .display {
      width: 1050px;
      height: 100%;

      overflow: hidden;

      /* background-color : red; */
      /* border : 3px solid red; */

      > .slider {
        width: 500%;
        height: 100%;

        display: flex;
        box-sizing: border-box;
        margin: 0;
        padding: 0;

        /* border : 3px solid green; */

        transform: translateX(0px);
        /* transform : translateX(-1050px); */
        transition: 1s ease;
      }
    }
  }

  > .carousel-btn {
    height: 10%;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    /* border : 1px solid green; */
    > .btn {
      border-radius: 50px;
      background-color: #f3f3f3;
      width: 13px;
      height: 13px;

      margin-left: 10px;
      transition: 0.3s ease;

      &:hover {
        cursor: pointer;
        background-color: #d22c26;
      }
    }

    > .activeBtn {
      border-radius: 50px;
      background-color: #4d4d4d;
      width: 13px;
      height: 13px;

      margin-left: 10px;
      transition: 0.3s ease;

      &:hover {
        cursor: pointer;
        background-color: #d22c26;
      }
    }

    > img {
      /* background-color : #f3f3f3; */
      width: 12px;
      height: 12px;

      margin-left: 10px;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const Event = () => {
  const [data, setData] = useState(dummyData);
  const [startX, setStartX] = useState(0);
  const [mode, setMode] = useState('play');
  const [focus, setFocus] = useState(1);

  const [display, setDisplay] = useState(false);

  const slideRef = useRef();

  const handleClick = (direction) => {
    // console.log(direction)

    // console.log(slideRef.current.style.transform)
    if (direction === 'left') {
      if (startX !== 0) {
        slideRef.current.style.transform = `translateX(${startX + 525}px)`;
        setStartX(startX + 525);
        setFocus(focus - 1);
        setMode('pause');
        clearTimeout(timer);
      } else {
        slideRef.current.style.transform = `translateX(0px)`;
        setStartX(0);
        setFocus(1);
        setMode('pause');
        clearTimeout(timer);
      }
    } else if (direction === 'right') {
      if (startX !== -(data.length - 2) * 525) {
        slideRef.current.style.transform = `translateX(${startX - 525}px)`;
        setStartX(startX - 525);
        setFocus(focus + 1);
        setMode('pause');
        clearTimeout(timer);
      } else {
        slideRef.current.style.transform = `translateX(0px)`;
        setStartX(0);
        setFocus(1);
        setMode('pause');
        clearTimeout(timer);
      }
    }
  };

  const handleCarouselBtn = (key) => {
    // console.log(key);
    if (key !== data.length) {
      slideRef.current.style.transform = `translateX(${-(key - 1) * 525}px)`;
      setStartX(-(key - 1) * 525);
      setFocus(key);
      setMode('pause');
      clearTimeout(timer);
    }
  };

  const handleMode = () => {
    mode === 'play' ? setMode('pause') : setMode('play');
  };

  const handlePlusClick = () => {
    setDisplay(true);
    // console.log(display)
  }

  const handleXClick = () => {
    setDisplay(false);
  }

  let timer;

  useEffect(() => {
    if (mode === 'play') {
      timer = setTimeout(() => {
        // console.log('그만해');
        if (startX !== -(data.length - 2) * 525) {
          slideRef.current.style.transform = `translateX(${startX - 525}px)`;
          setStartX(startX - 525);
          setFocus(focus + 1);
        } else {
          slideRef.current.style.transform = `translateX(0px)`;
          setStartX(0);
          setFocus(1);
        }
      }, 3000);
    }
  }, [mode, startX]);

  return (
    <>
      <Modal props = {display}>
        <button onClick={handleXClick}>X</button>
        <ModalContent/>
      </Modal>
      <EventArea>
        <Header>
          <span className="title">이벤트</span>
          <img src={plusBtn} alt="plusBtn" className="plusBtn" onClick={handlePlusClick}></img>
        </Header>
        <Carousel>
          <div className="slide">
            <img src={leftBtn} alt="leftBtn" className="leftBtn" onClick={() => handleClick('left')}></img>
            <div className="display">
              <div className="slider" ref={slideRef}>
                <AdContent content={data} />
              </div>
            </div>
            <img src={rightBtn} alt="rightBtn" className="rightBtn" onClick={() => handleClick('right')}></img>
          </div>
          <div className="carousel-btn">
            {data.map((el) => {
              if (el.id !== data.length) {
                return (
                  <div
                    className={focus === el.id ? 'activeBtn' : 'btn'}
                    key={el.id}
                    onClick={() => handleCarouselBtn(el.id)}
                  ></div>
                );
              }
            })}
            {mode === 'play' ? <img src={pause} onClick={handleMode}></img> : <img src={play} onClick={handleMode}></img>}
          </div>
        </Carousel>
      </EventArea>
    </>
  );
};

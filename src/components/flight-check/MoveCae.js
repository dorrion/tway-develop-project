/* eslint-disable */
import React from 'react';
import {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import './MoveCae.css';

import prevIcon from '../../assets/icon/control_prev.png';
import nextIcon from '../../assets/icon/control_next.png';
import pauseIcon from '../../assets/icon/control_pause.png';
import playIcon from '../../assets/icon/control_play.png';

//x좌표 이동

const Window = styled.div`
  width: 100%;
  height: 220px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: aliceblue; */
`;

const CaeZone = styled.div`
  width: 850px;
  height: 156px;

  overflow: hidden;

  margin-top: auto;

  /* background-color: blue; */

  display: flex;
  align-items: center;
  justify-content: center;

  .flexbox {
    display: flex;
    flex-direction: row;
    /* overflow: hidden; */
    justify-content: flex-start;
  }
`;

const ButtonZone = styled.div`
  width: 100%;
  height: 28px;
  /* background-color: gold; */

  display: flex;
  justify-content: center;

  margin-top: auto;
  .playAndPause {
    width: 4.5rem;
    height: 1rem;
    padding: 0.2rem;
    background-color: rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    display: flex;
    justify-content: space-evenly;

    margin-right: 20px;
  }

  .playAndPause > img {
    cursor: pointer;
  }

  .addList {
    width: 4.5rem;
    height: 1rem;
    padding: 0.2rem;
    background-color: rgba(0, 0, 0, 0.25);
    border-radius: 3px;
  }
`;

function MoveCae() {
  const images = useRef([
    {src: process.env.PUBLIC_URL + 'images/0cc6d99a-d43c-44a2-9407-372cb7835a42.png'},
    {src: process.env.PUBLIC_URL + 'images/85bd61d2-9d97-4354-a8e7-9e5000c15c50.png'},
    {src: process.env.PUBLIC_URL + 'images/cc14bfa7-8582-4acf-93fb-ea9ae24bebac.png'},
  ]);

  const [current, setCurrent] = useState(0);
  const [style, setStyle] = useState({
    marginLeft: `${current * 2}00%`,
  });
  const [play, setPlay] = useState(true);

  const handleMode = () => {
    setPlay(!play);
  };

  const imgSize = useRef(images.current.length);

  const moveSlide = (i) => {
    let nextIndex = current + i;

    if (nextIndex < 0) nextIndex = imgSize.current - 1;
    else if (nextIndex >= imgSize.current) nextIndex = 0;

    setCurrent(nextIndex);
  };

  useEffect(() => {
    setStyle({marginLeft: `${2 - current * 2}00%`});
  }, [current]);

  useEffect(() => {
    if (play) {
      setTimeout(() => {
        moveSlide(1);
      }, 4000);
    }
  }, [play, current]);

  return (
    <Window>
      <CaeZone>
        <div className="flexbox" style={style}>
          {images.current.map((img, i) => (
            <img key={i} className="img" src={img.src}></img>
          ))}
        </div>
      </CaeZone>
      <ButtonZone>
        <div className="playAndPause">
          <img
            src={prevIcon}
            onClick={() => {
              moveSlide(-1);
            }}
            id="aro1_prev"
          ></img>

          <img src={play ? pauseIcon : playIcon} onClick={handleMode}></img>

          <img
            src={nextIcon}
            onClick={() => {
              moveSlide(1);
            }}
            id="aro1_next"
          ></img>
        </div>
        <div className="addList"></div>
      </ButtonZone>
    </Window>
  );
}

export default MoveCae;

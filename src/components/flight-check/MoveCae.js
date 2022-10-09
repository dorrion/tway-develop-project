/* eslint-disable */
import React from 'react';
import {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';

import prevIcon from '../../assets/icon/control_prev.png';
import nextIcon from '../../assets/icon/control_next.png';
import pauseIcon from '../../assets/icon/control_pause.png';

//x좌표 이동
//

const Window = styled.div`
  width: 100%;
  height: 220px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: aliceblue; */
`;

const CaeZone = styled.div`
  width: 100%;
  height: 156px;

  overflow: hidden;

  margin-top: auto;

  background-color: blue;
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
    {src: process.env.PUBLIC_URL + 'images/bg_main_booking02.png'},
    {src: process.env.PUBLIC_URL + 'images/bg_main_booking02.png'},
    {src: -process.env.PUBLIC_URL + 'images/bg_main_booking02.png'},
  ]);

  const [current, setCurrent] = useState(0);
  const [style, setStyle] = useState({
    marginLeft: `-${current}00%`,
  });
  const imgSize = useRef(images.current.length);

  const moveSlide = (i) => {
    let nextIndex = current + i;

    if (nextIndex < 0) nextIndex = imgSize.current - 1;
    else if (nextIndex >= imgSize.current) nextIndex = 0;

    setCurrent(nextIndex);
  };

  useEffect(() => {
    setStyle({marginLeft: `-${current}00%`});
  }, [current]);

  return (
    <Window>
      <CaeZone>
        <div className="flexbox" style={style}>
          {images.current.map((img, i) => (
            <div key={i} className="img" style={{backgroundImage: `url(${img.src})`}}></div>
          ))}
        </div>
      </CaeZone>
      <ButtonZone>
        <div className="playAndPause">
          <img src={prevIcon} id="aro1_prev"></img>
          <img src={pauseIcon}></img>
          <img src={nextIcon} id="aro1_next"></img>
        </div>
        <div className="addList"></div>
      </ButtonZone>
    </Window>
  );
}

export default MoveCae;
